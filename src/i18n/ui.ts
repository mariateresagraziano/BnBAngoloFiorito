// Testi di interfaccia (menu, footer, bottoni). I contenuti delle pagine
// arriveranno poi da DatoCMS.

export const languages = {
  it: 'Italiano',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'it';

export const ui = {
  it: {
    'nav.home': 'Home',
    'nav.about': 'Chi siamo',
    'nav.rooms': 'Camere',
    'nav.rules': 'Regolamento',
    'nav.rates': 'Tariffe',
    'nav.book': 'Prenota',
    'nav.amenities': 'Servizi',
    'nav.location': 'Nei dintorni',
    'nav.contact': 'Contatti',
    'footer.rules': 'Regolamento',
    'footer.privacy': 'Privacy Policy',
    'menu.open': 'Apri menu',
    'cta.about': 'Chi siamo',
    'cta.book': 'Prenota',
    'section.rooms': 'Le Nostre Camere',
    'section.amenities': 'Servizi',
    'room.description': 'Descrizione',
    'room.services': 'Servizi',
    'cta.discover': 'Scopri la camera',
    'section.gallery': 'Galleria',
    'legal.untranslated': 'Questo testo è disponibile solo in italiano.',
    'form.room': 'Camera',
    'form.guests': 'Ospiti',
    'form.arrival': 'Arrivo',
    'form.departure': 'Partenza',
    'form.name': 'Nome',
    'form.email': 'Email',
    'form.message': 'Messaggio',
    'form.consent': 'Ho letto e accetto il',
    'form.and': 'e la',
    'form.send': 'Invia',
    'form.sent': 'Grazie per averci contattato, vi risponderemo al più presto!',
    'form.invalid': 'Controlla i dati inseriti: alcuni campi non sono validi.',
    'form.captcha': 'Verifica anti-spam non riuscita. Riprova.',
    'form.error': 'Errore: messaggio non inviato. Riprova o contattaci via telefono o WhatsApp.',
    'contact.title': 'Contattaci',
    'notFound.title': 'Pagina non trovata',
    'notFound.text': 'La pagina che cerchi non esiste o è stata spostata.',
    'notFound.cta': 'Torna alla home',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.rooms': 'Rooms',
    'nav.rules': 'Terms and Conditions',
    'nav.rates': 'Rates',
    'nav.book': 'Book',
    'nav.amenities': 'Amenities',
    'nav.location': 'Location',
    'nav.contact': 'Contact Us',
    'footer.rules': 'Terms and Conditions',
    'footer.privacy': 'Privacy Policy',
    'menu.open': 'Open menu',
    'cta.about': 'About Us',
    'cta.book': 'Book now',
    'section.rooms': 'Our Rooms',
    'section.amenities': 'Amenities',
    'room.description': 'Description',
    'room.services': 'Services',
    'cta.discover': 'Discover the room',
    'section.gallery': 'Photo Gallery',
    'legal.untranslated': 'This document is only available in Italian.',
    'form.room': 'Room',
    'form.guests': 'Guests',
    'form.arrival': 'Arrival',
    'form.departure': 'Departure',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.consent': 'I have read and accept the',
    'form.and': 'and the',
    'form.send': 'Send',
    'form.sent': 'Thank you for contacting us, we will reply as soon as possible!',
    'form.invalid': 'Please check your details: some fields are not valid.',
    'form.captcha': 'Anti-spam check failed. Please try again.',
    'form.error': 'Error: message not sent. Please try again or contact us by phone or WhatsApp.',
    'contact.title': 'Contact us',
    'notFound.title': 'Page not found',
    'notFound.text': 'The page you are looking for does not exist or has been moved.',
    'notFound.cta': 'Back to home',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return (key: UiKey) => ui[lang][key] ?? ui[defaultLang][key];
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in languages ? (first as Lang) : defaultLang;
}

/** Percorso localizzato: /camere per l'italiano, /en/camere per l'inglese. */
export function localizePath(path: string, lang: Lang) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}

/** Stesso percorso della pagina corrente nell'altra lingua. */
export function switchLangPath(url: URL, target: Lang) {
  const current = getLangFromUrl(url);
  const path = current === defaultLang ? url.pathname : url.pathname.replace(`/${current}`, '') || '/';
  return localizePath(path, target);
}

export const nav = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/chi-siamo' },
  {
    key: 'nav.rooms',
    href: '/camere',
    children: [
      { key: 'nav.rules', href: '/regolamento' },
      { key: 'nav.rates', href: '/tariffe' },
      { key: 'nav.book', href: '/prenota' },
    ],
  },
  { key: 'nav.amenities', href: '/servizi' },
  { key: 'nav.location', href: '/location' },
  { key: 'nav.contact', href: '/contatti' },
] satisfies { key: UiKey; href: string; children?: { key: UiKey; href: string }[] }[];
