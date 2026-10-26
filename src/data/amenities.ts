// Servizi offerti. Candidati a diventare il modello "amenity" su DatoCMS.
import type { Lang } from '../i18n/ui';

export interface Amenity {
  icon: string;
  title: Record<Lang, string>;
  text: Record<Lang, string>;
}

export const amenities: Amenity[] = [
  {
    icon: 'fa6-solid:mug-saucer',
    title: { it: 'Colazione', en: 'Breakfast' },
    text: { it: 'Italiana o continentale', en: 'Italian or continental breakfast' },
  },
  {
    icon: 'fa6-solid:car',
    title: { it: 'Parcheggio', en: 'Car Parking' },
    text: {
      it: "Parcheggio privato gratuito situato all'interno della struttura",
      en: 'Private car park located inside the structure which is available for our guests, free of charge',
    },
  },
  {
    icon: 'fa6-solid:suitcase',
    title: { it: 'Deposito bagagli', en: 'Luggage storage' },
    text: {
      it: 'Per gli ospiti che effettuano il check-in anticipato o il check-out tardivo',
      en: 'For guests who check in early or check out late',
    },
  },
  {
    icon: 'fa6-solid:paw',
    title: { it: 'Animali domestici', en: 'Pets' },
    text: {
      it: 'Non accettiamo animali domestici. Tuttavia nella struttura vive un cane di piccola taglia molto coccolone',
      en: 'We do not accept animals. However a very cuddly small dog lives in the property.',
    },
  },
  {
    icon: 'fa6-solid:bus',
    title: { it: 'Navetta', en: 'Shuttle' },
    text: {
      it: "Servizio a pagamento da/per stazione, porto e aeroporto di Fiumicino",
      en: 'Paid pick-up service to and from the train station, the port and Fiumicino airport.',
    },
  },
  {
    icon: 'fa6-solid:soap',
    title: { it: 'Pulizia', en: 'Cleaning' },
    text: {
      it: 'Camere pulite e igienizzate a giorni alterni o su richiesta',
      en: 'Clean and sanitized rooms every other day or on request',
    },
  },
  {
    icon: 'fa6-solid:wifi',
    title: { it: 'Wi-Fi', en: 'Wi-Fi' },
    text: { it: 'Richiedete la password al check-in', en: 'Request your password at check-in' },
  },
  {
    icon: 'fa6-solid:tv',
    title: { it: 'TV schermo piatto', en: 'Flat-screen TV' },
    text: { it: "Per un po' di relax", en: 'For a little relaxation' },
  },
  {
    icon: 'fa6-solid:bath',
    title: { it: 'Bagno in camera', en: 'Ensuite bathroom' },
    text: {
      it: 'Ogni camera ha il suo bagno privato con tutti i comfort',
      en: 'Each room has its own private bathroom with all amenities',
    },
  },
];
