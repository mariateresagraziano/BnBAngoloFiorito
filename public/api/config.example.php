<?php
// Copia questo file in config.php (stessa cartella) e inserisci i valori reali.
// config.php non va condiviso: contiene la chiave segreta di Turnstile.
if (!defined('ANGOLOFIORITO_MAIL')) {
  http_response_code(403);
  exit;
}

return [
  // Dove arrivano le richieste
  'to' => 'bnbangolofiorito@gmail.com',

  // Mittente: su Aruba deve essere una casella esistente del dominio
  'from_email' => 'info@bnbangolofiorito.com',
  'from_name' => 'BnB Angolo Fiorito',

  // Chiave segreta Cloudflare Turnstile (dashboard Cloudflare > Turnstile).
  // Questa è la chiave di test che fa passare sempre la verifica: sostituiscila in produzione.
  'turnstile_secret' => '1x0000000000000000000000000000000AA',
];
