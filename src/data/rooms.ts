// Camere. Candidate a diventare il modello "room" su DatoCMS.
import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';
import { imagesByPrefix } from './images';
import africa from '../assets/images/home/stanza_africa.jpg';
import oxford from '../assets/images/home/stanza_oxford.jpg';

type Localized = Record<Lang, string>;
type IconItem = { icon: string; text: Localized };

export interface Room {
  slug: string;
  name: Localized;
  /** Foto di copertina (card in home) */
  image: ImageMetadata;
  gallery: ImageMetadata[];
  description: Localized;
  /** Caratteristiche brevi mostrate nella card in home */
  features: IconItem[];
  schedule: IconItem[];
  services: IconItem[];
}

const galleryFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/images/camere/*.jpg', { eager: true });
const gallery = (prefix: string) => imagesByPrefix(galleryFiles, prefix);

const bathroom: IconItem = {
  icon: 'fa6-solid:bath',
  text: { it: 'Bagno in camera: tutti i comfort inclusi', en: 'Private bathroom: all comfort included' },
};
const checkIn: IconItem = {
  icon: 'fa6-solid:door-open',
  text: { it: 'Check-in: dalle 15.00 alle 21.00', en: 'Check-in: from 3.00 p.m. to 9.00 p.m.' },
};

const schedule: IconItem[] = [
  { icon: 'fa6-solid:door-open', text: { it: 'Check-in dalle 15.00 alle 21.00', en: 'Check in from 3.00 p.m. to 9.00 p.m.' } },
  { icon: 'fa6-solid:door-closed', text: { it: 'Check-out entro le 11.00', en: 'Check out until 11.00 a.m.' } },
];

const services: IconItem[] = [
  { icon: 'fa6-solid:mug-saucer', text: { it: 'Colazione dalle 7.00 alle 10.00', en: 'Breakfast from 7.00 a.m. to 10.00 a.m.' } },
  { icon: 'fa6-solid:bath', text: { it: 'Bagno in camera con tutti i comfort', en: 'Ensuite bathroom with all comforts' } },
  { icon: 'fa6-solid:soap', text: { it: 'Pulizia a giorni alterni o su richiesta', en: 'Cleaning every other day or on request' } },
  { icon: 'fa6-solid:wifi', text: { it: 'Wi-Fi', en: 'Wi-Fi' } },
  { icon: 'fa6-solid:ban-smoking', text: { it: 'No fumatori', en: 'No smoking' } },
  { icon: 'fa6-solid:snowflake', text: { it: 'Aria condizionata', en: 'Air conditioning' } },
];

export const rooms: Room[] = [
  {
    slug: 'africa',
    name: { it: 'Camera Africa', en: 'Africa Room' },
    image: africa,
    gallery: gallery('africa'),
    description: {
      it: "Una meravigliosa stanza in cui godersi l'atmosfera africana con mobili pregiati provenienti dal continente stesso. Questa camera contiene 2 letti: 1 letto matrimoniale e 1 letto ad una piazza e mezza. Può ospitare 3 adulti, oppure 2 adulti e 2 bambini.",
      en: 'A wonderful room where you can experience the distinct atmosphere of East Africa, with fine furniture from the continent itself. It has 2 beds: 1 double bed and 1 three-quarter bed. It can accommodate 3 adults, or 2 adults and 2 children.',
    },
    features: [
      {
        icon: 'fa6-solid:user',
        text: { it: 'Capienza: 3 adulti (oppure 2 adulti e 2 bambini)', en: 'Capacity: 3 adults (or 2 adults and 2 children)' },
      },
      bathroom,
      checkIn,
    ],
    schedule,
    services,
  },
  {
    slug: 'oxford',
    name: { it: 'Camera Oxford', en: 'Oxford Room' },
    image: oxford,
    gallery: gallery('oxford'),
    description: {
      it: 'Camera doppia in stile inglese. Una stanza piena di luce naturale e fornita di ogni comfort.',
      en: 'Double room furnished in the typical English style, full of natural light and equipped with every comfort.',
    },
    features: [{ icon: 'fa6-solid:user', text: { it: 'Capienza: 2 adulti', en: 'Capacity: 2 adults' } }, bathroom, checkIn],
    schedule,
    services,
  },
];
