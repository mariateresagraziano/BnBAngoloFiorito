// Luoghi nei dintorni (pagina "Location"). Candidati a diventare il modello "place" su DatoCMS.
import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';
import spiagge from '../assets/images/location/spiagge.jpg';
import movida from '../assets/images/location/movida.jpg';
import castello from '../assets/images/location/castello.jpg';
import roma from '../assets/images/location/roma.jpg';
import ficoncella from '../assets/images/location/ficoncella.jpg';
import necropoli from '../assets/images/location/necropoli.jpg';

export interface Place {
  slug: string;
  image: ImageMetadata;
  title: Record<Lang, string>;
  text: Record<Lang, string>;
}

export const places: Place[] = [
  {
    slug: 'spiagge',
    image: spiagge,
    title: { it: 'Le spiagge', en: 'Beaches' },
    text: {
      it: 'Facilmente raggiungibili le spiagge di Santa Marinella, Tarquinia e Santa Severa.',
      en: 'The beaches of Santa Marinella, Tarquinia and Santa Severa are within easy reach.',
    },
  },
  {
    slug: 'ristoranti',
    image: movida,
    title: { it: 'Ristoranti e Locali', en: 'Restaurants and Bars' },
    text: {
      it: 'Ampia scelta di ristoranti sul mare, bar e locali per i più giovani.',
      en: 'Wide choice of seaside restaurants, bars and clubs for the youngest.',
    },
  },
  {
    slug: 'santa-severa',
    image: castello,
    title: { it: 'Il castello di Santa Severa', en: 'Castle of Santa Severa' },
    text: {
      it: 'A pochi chilometri da Civitavecchia, è uno dei luoghi più suggestivi del Lazio, un patrimonio di enorme valore storico e culturale.',
      en: 'It is one of the most evocative places in Lazio, a heritage of enormous historical and cultural value. It is a few kilometers from Civitavecchia.',
    },
  },
  {
    slug: 'roma',
    image: roma,
    title: { it: 'Roma', en: 'Rome' },
    text: {
      it: 'A soli 45 minuti di treno, con treni che partono per la stazione di San Pietro ogni 30 min.',
      en: "Rome is a mere 45 minutes train ride, with trains leaving for St. Peter's station every 30 minutes.",
    },
  },
  {
    slug: 'ficoncella',
    image: ficoncella,
    title: { it: 'Terme della Ficoncella', en: 'Ficoncella Thermal Baths' },
    text: {
      it: "Le Terme della Ficoncella sono un complesso di vasche naturali con acqua sulfurea, situato a pochi chilometri da Civitavecchia, noto per le proprietà terapeutiche e il panorama sul mare. L'acqua, calda e limpida, è indicata per problemi di pelle e articolari, e la struttura offre un'esperienza termale autentica a un prezzo modesto, con servizi essenziali e parcheggio gratuito.",
      en: "The Terme della Ficoncella are a complex of natural pools with sulfurous water, located a few kilometers from Civitavecchia. They are known for their therapeutic properties and the panoramic sea view. The water is warm and clear, and it's recommended for skin and joint problems. The facility offers an authentic thermal experience at a modest price, with essential services and free parking.",
    },
  },
  {
    slug: 'necropoli',
    image: necropoli,
    title: { it: 'Necropoli', en: 'Necropolis' },
    text: {
      it: 'Le necropoli etrusche di Cerveteri e Tarquinia rappresentano la più alta testimonianza di questa popolazione che creò la prima cultura urbana del Mediterraneo occidentale sviluppandosi per circa 700 anni, dall’VIII secolo al I secolo a.C., in quella parte del centro Italia che va dal Lazio settentrionale alla Toscana.',
      en: 'The Etruscan cemeteries at Cerveteri and Tarquinia offer the sole important attestation of this population that created the first urban culture in the western Mediterranean, surviving for around 700 years, from the eighth to the first century B.C., in that part of central Italy extending from northern Latium to Tuscany.',
    },
  },
];
