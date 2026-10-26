// Servizi descritti nella pagina "Servizi". Candidati a diventare il modello "service" su DatoCMS.
import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';
import veranda from '../assets/images/servizi/veranda.jpg';
import parcheggio from '../assets/images/servizi/parcheggio.jpg';
import bnb from '../assets/images/servizi/bnb.jpg';
import navetta from '../assets/images/servizi/navetta.jpg';
import giardino from '../assets/images/servizi/giardino.jpg';

export interface Service {
  slug: string;
  image: ImageMetadata;
  title: Record<Lang, string>;
  text: Record<Lang, string>;
}

export const services: Service[] = [
  {
    slug: 'veranda',
    image: veranda,
    title: { it: 'Veranda', en: 'Veranda' },
    text: {
      it: 'Un luogo comune dove assaporare la vostra colazione con comodità. L’utilizzo della cucina è riservato solo alla preparazione della colazione ordinata dagli ospiti paganti. Siamo comunque felici di offrire, in qualunque momento della giornata, una tazza di caffè o tè agli ospiti che lo chiederanno.',
      en: 'A common place to enjoy your breakfast in comfort. The use of the kitchen is reserved only for the preparation of breakfast ordered by paying guests. However, we are happy to offer, at any time of the day, a cup of coffee or tea to guests who ask for it.',
    },
  },
  {
    slug: 'parcheggio',
    image: parcheggio,
    title: { it: 'Parcheggio Gratuito', en: 'Free Car Parking' },
    text: {
      it: "Mettiamo a disposizione dei nostri ospiti un parcheggio privato gratuito situato all'interno della struttura.",
      en: 'We have a free private parking located inside the structure available to our guests.',
    },
  },
  {
    slug: 'ospitalita',
    image: bnb,
    title: { it: 'Ospitalità', en: 'Accommodation' },
    text: {
      it: "Per accedere alle camere è necessario salire una rampa di scale. Ogni camera è dotata di bagno privato e di tutta la biancheria utile. Telecamere di sicurezza solo all'esterno. I proprietari saranno sempre disponibili per qualsiasi bisogno.",
      en: 'To access the rooms it is necessary to go up a flight of stairs. Each room has a private bathroom and all useful linens. Security cameras outside only. The owners will always be available for any need.',
    },
  },
  {
    slug: 'navetta',
    image: navetta,
    title: { it: 'Navetta', en: 'Shuttle' },
    text: {
      it: "Agli ospiti sprovvisti di mezzo proprio verrà offerto un servizio navetta a pagamento da/per la stazione, il porto di Civitavecchia e l'aeroporto di Fiumicino.",
      en: 'Guests without their own vehicle will be offered a paid shuttle service to / from the train station, the port of Civitavecchia and Fiumicino airport.',
    },
  },
  {
    slug: 'giardino',
    image: giardino,
    title: { it: 'Giardino', en: 'Garden' },
    text: {
      it: "La struttura è immersa nel verde di un giardino di 1000mq con un'ottima esposizione solare. Gli ospiti hanno accesso libero nella parte posteriore della struttura, arredata con tavoli e sedie. Liberi di godere del relax offerto dal giardino e dell'accoglienza dei proprietari e del loro cagnolino che qui risiedono.",
      en: 'The villa is found on a 1000sqm lot rich in Mediterranean vegetation and sunshine. In the garden, guests may enjoy breakfast and the hospitality of the owners.',
    },
  },
];
