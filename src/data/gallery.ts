// Gallerie fotografiche di "Chi siamo". Candidate a diventare il modello "gallery" su DatoCMS.
import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';
import { imagesByPrefix } from './images';

export interface Gallery {
  slug: string;
  title?: Record<Lang, string>;
  images: ImageMetadata[];
}

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/images/galleria/*.jpg', { eager: true });

export const galleries: Gallery[] = [
  { slug: 'giardino', title: { it: 'Il giardino', en: 'The garden' }, images: imagesByPrefix(files, 'giardino') },
  { slug: 'bnb', title: { it: 'Il B&B', en: 'The structure' }, images: imagesByPrefix(files, 'bnb') },
  { slug: 'citta', title: { it: 'La nostra città', en: 'Our city' }, images: imagesByPrefix(files, 'cv') },
  {
    slug: 'locali',
    title: { it: 'Ristoranti e locali', en: 'Restaurants and bars' },
    images: imagesByPrefix(files, 'movida'),
  },
];
