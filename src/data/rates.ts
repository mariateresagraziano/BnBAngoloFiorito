// Listino prezzi. Candidato a diventare il modello "rates" su DatoCMS.
import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export const ratesUpdated: Localized = { it: 'Ottobre 2025', en: 'October 2025' };

const periods = {
  offSeason: { it: 'Bassa stagione', en: 'Off-season' },
  easterOctober: { it: 'Pasqua - Ottobre', en: 'Easter - October' },
  mayDay: { it: 'Primo Maggio', en: 'Labor day' },
  june2: { it: '2 Giugno', en: '2nd of June' },
  july: { it: 'Luglio', en: 'July' },
  august: { it: 'Agosto', en: 'August' },
} satisfies Record<string, Localized>;

export const minimumStay: { period: Localized; nights: number }[] = [
  { period: periods.offSeason, nights: 2 },
  { period: { it: 'Nel mese di Giugno', en: 'In the month of June' }, nights: 3 },
  { period: { it: 'Nei mesi di Luglio e Agosto', en: 'In the months of July and August' }, nights: 5 },
];

export interface RoomRates {
  /** slug della camera in rooms.ts */
  room: string;
  columns: { guests: number; label: Localized; note?: Localized }[];
  /** un prezzo a notte (€) per ogni colonna */
  rows: { period: Localized; prices: number[] }[];
}

export const roomRates: RoomRates[] = [
  {
    room: 'oxford',
    columns: [
      { guests: 1, label: { it: '1 ospite', en: '1 guest' } },
      { guests: 2, label: { it: '2 ospiti', en: '2 guests' } },
    ],
    rows: [
      { period: periods.offSeason, prices: [60, 65] },
      { period: periods.easterOctober, prices: [65, 70] },
      { period: periods.mayDay, prices: [65, 70] },
      { period: periods.june2, prices: [65, 70] },
      { period: periods.july, prices: [65, 70] },
      { period: periods.august, prices: [70, 75] },
    ],
  },
  {
    room: 'africa',
    columns: [
      { guests: 2, label: { it: '2 ospiti', en: '2 guests' } },
      {
        guests: 3,
        label: { it: '3 ospiti', en: '3 guests' },
        note: { it: 'oppure 2 adulti e 2 bambini', en: 'or 2 adults and 2 children' },
      },
    ],
    rows: [
      { period: periods.offSeason, prices: [70, 75] },
      { period: periods.easterOctober, prices: [75, 80] },
      { period: periods.mayDay, prices: [75, 80] },
      { period: periods.june2, prices: [75, 80] },
      { period: periods.july, prices: [75, 80] },
      { period: periods.august, prices: [80, 85] },
    ],
  },
];

/** Supplemento colazione a persona (€) */
export const breakfastRates: { name: Localized; price: number }[] = [
  { name: { it: 'Italiana', en: 'Italian breakfast' }, price: 10 },
  { name: { it: 'Continentale', en: 'Continental breakfast' }, price: 12 },
];
