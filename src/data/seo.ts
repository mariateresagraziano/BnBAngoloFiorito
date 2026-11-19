// Titoli e descrizioni per Google e per le anteprime dei link condivisi (WhatsApp, Facebook…).
// BOZZE da far verificare al cliente. Descrizioni: ~150 caratteri, il titolo viene completato con il nome del B&B.
import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export const siteName = 'B&B Angolo Fiorito';

/** Immagine per le anteprime dei link condivisi (src/assets) */
export { default as shareImage } from '../assets/images/home/intro_bnb.jpg';

export const seo = {
  home: {
    title: { it: 'Bed & Breakfast a Civitavecchia', en: 'Bed & Breakfast in Civitavecchia' },
    description: {
      it: 'Due camere a tema in una villa con giardino a Civitavecchia, con parcheggio privato gratuito, a 1,2 km dal porto e dalla stazione.',
      en: 'Two themed rooms in a villa with garden in Civitavecchia, with free private parking, 1.2 km from the port and the train station.',
    },
  },
  rooms: {
    description: {
      it: 'Camera Africa e Camera Oxford: camere con bagno privato, aria condizionata e Wi-Fi nel B&B Angolo Fiorito a Civitavecchia.',
      en: 'Africa Room and Oxford Room: rooms with private bathroom, air conditioning and Wi-Fi at B&B Angolo Fiorito in Civitavecchia.',
    },
  },
  rates: {
    description: {
      it: 'Prezzi delle camere per stagione, colazione, soggiorno minimo e condizioni di prenotazione del B&B Angolo Fiorito a Civitavecchia.',
      en: 'Room prices by season, breakfast, minimum stay and booking conditions at B&B Angolo Fiorito in Civitavecchia.',
    },
  },
  services: {
    description: {
      it: 'Colazione, parcheggio privato gratuito, giardino, veranda e navetta: i servizi del B&B Angolo Fiorito a Civitavecchia.',
      en: 'Breakfast, free private parking, garden, veranda and shuttle: the services of B&B Angolo Fiorito in Civitavecchia.',
    },
  },
  about: {
    description: {
      it: 'Una villa con giardino di 1000 mq in un quartiere tranquillo di Civitavecchia, a pochi passi dal porto e dalla stazione.',
      en: 'A villa with a 1000 sqm garden in a quiet neighbourhood of Civitavecchia, a short walk from the port and the train station.',
    },
  },
  location: {
    description: {
      it: 'Cosa vedere vicino a Civitavecchia: spiagge, castello di Santa Severa, Terme della Ficoncella, necropoli etrusche e Roma a 45 minuti.',
      en: 'What to see near Civitavecchia: beaches, Santa Severa castle, Ficoncella thermal baths, Etruscan necropolises and Rome 45 minutes away.',
    },
  },
  booking: {
    description: {
      it: 'Richiedi la disponibilità delle camere del B&B Angolo Fiorito a Civitavecchia con il modulo di prenotazione o su WhatsApp.',
      en: 'Check room availability at B&B Angolo Fiorito in Civitavecchia with the booking form or via WhatsApp.',
    },
  },
  contacts: {
    description: {
      it: 'Telefono, email, WhatsApp e modulo di contatto del B&B Angolo Fiorito, Via Paolo Vidau 22, Civitavecchia.',
      en: 'Phone, email, WhatsApp and contact form of B&B Angolo Fiorito, Via Paolo Vidau 22, Civitavecchia.',
    },
  },
  regolamento: {
    description: {
      it: 'Regolamento interno del B&B Angolo Fiorito: check-in e check-out, cancellazione, colazione, giardino e regole della struttura.',
      en: 'House rules of B&B Angolo Fiorito: check-in and check-out, cancellation, breakfast, garden and property rules.',
    },
  },
  policy: {
    description: {
      it: 'Informativa sul trattamento dei dati personali del B&B Angolo Fiorito ai sensi del Regolamento UE 2016/679 (GDPR).',
      en: 'Privacy policy of B&B Angolo Fiorito under EU Regulation 2016/679 (GDPR).',
    },
  },
} satisfies Record<string, { title?: Localized; description: Localized }>;
