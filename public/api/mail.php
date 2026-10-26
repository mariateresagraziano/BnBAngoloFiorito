<?php
// Invio email dei form "Contatti" e "Prenota".
// Risponde in JSON: { "ok": bool, "code": string }. I messaggi per l'utente sono tradotti lato client.

define('ANGOLOFIORITO_MAIL', true);
// Eventuali warning (es. mail() fallita) non devono sporcare la risposta JSON
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');

function respond(bool $ok, string $code, int $status = 200): void
{
  http_response_code($status);
  echo json_encode(['ok' => $ok, 'code' => $code]);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  respond(false, 'method', 405);
}

$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) {
  respond(false, 'config', 500);
}
$config = require $configFile;

function field(string $name, int $maxLength = 200): string
{
  $value = trim((string) ($_POST[$name] ?? ''));
  return mb_substr($value, 0, $maxLength);
}

// Campo nascosto: le persone non lo vedono, i bot spesso lo compilano
if (field('website') !== '') {
  respond(true, 'sent');
}

// --- Verifica Cloudflare Turnstile ---
function verifyTurnstile(string $secret, string $token): bool
{
  if ($token === '') {
    return false;
  }
  $payload = http_build_query([
    'secret' => $secret,
    'response' => $token,
    'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
  ]);
  $context = stream_context_create([
    'http' => [
      'method' => 'POST',
      'header' => 'Content-Type: application/x-www-form-urlencoded',
      'content' => $payload,
      'timeout' => 10,
    ],
  ]);
  $result = @file_get_contents('https://challenges.cloudflare.com/turnstile/v0/siteverify', false, $context);
  if ($result === false) {
    return false;
  }
  $data = json_decode($result, true);
  return is_array($data) && !empty($data['success']);
}

if (!verifyTurnstile($config['turnstile_secret'], field('cf-turnstile-response', 2048))) {
  respond(false, 'captcha', 400);
}

// --- Validazione ---
$type = field('type', 20) === 'prenotazione' ? 'prenotazione' : 'contatti';
$name = field('nome', 100);
$email = field('email', 200);
$message = field('messaggio', 5000);

$valid =
  // lettere (anche accentate), spazi, apostrofi, punti e trattini
  preg_match("/^[\p{L}\p{M}' .-]+$/u", $name) === 1 &&
  filter_var($email, FILTER_VALIDATE_EMAIL) !== false &&
  $message !== '' &&
  field('policy', 20) === 'accepted';

$lines = [
  'Messaggio inviato dal form ' . ($type === 'prenotazione' ? 'prenotazioni' : 'contatti') . ' del sito.',
  '',
  'Nome: ' . $name,
  'Email: ' . $email,
];

if ($type === 'prenotazione') {
  // slug delle camere come in src/data/rooms.ts
  $rooms = ['africa' => 'Africa', 'oxford' => 'Oxford'];
  $roomSlug = field('stanza', 50);
  $guests = filter_var($_POST['ospiti'] ?? '', FILTER_VALIDATE_INT, ['options' => ['min_range' => 1, 'max_range' => 4]]);
  $arrival = DateTime::createFromFormat('!Y-m-d', field('arrivo', 10));
  $departure = DateTime::createFromFormat('!Y-m-d', field('partenza', 10));
  $today = new DateTime('today');

  $valid =
    $valid &&
    isset($rooms[$roomSlug]) &&
    $guests !== false &&
    $arrival !== false &&
    $departure !== false &&
    $arrival >= $today &&
    $departure > $arrival;

  if ($valid) {
    $lines[] = 'Camera: ' . $rooms[$roomSlug];
    $lines[] = 'Ospiti: ' . $guests;
    $lines[] = 'Arrivo: ' . $arrival->format('d/m/Y');
    $lines[] = 'Partenza: ' . $departure->format('d/m/Y');
  }
}

if (!$valid) {
  respond(false, 'invalid', 400);
}

$lines[] = '';
$lines[] = 'Messaggio:';
$lines[] = $message;

// --- Invio ---
$subject = ($type === 'prenotazione' ? 'Richiesta prenotazione' : 'Richiesta informazioni') . ' - ' . $name;
$headers = [
  'From' => mb_encode_mimeheader($config['from_name']) . ' <' . $config['from_email'] . '>',
  'Reply-To' => $email,
  'MIME-Version' => '1.0',
  'Content-Type' => 'text/plain; charset=UTF-8',
  'Content-Transfer-Encoding' => '8bit',
];

$sent = mail(
  $config['to'],
  mb_encode_mimeheader($subject, 'UTF-8'),
  wordwrap(implode("\r\n", $lines), 70, "\r\n"),
  $headers,
  '-f' . $config['from_email']
);

if (!$sent) {
  respond(false, 'send_error', 500);
}

respond(true, 'sent');
