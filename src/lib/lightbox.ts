// Prepara (in build) la versione grande di un'immagine per PhotoSwipe.
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

const FULL_WIDTH = 1920;

export interface LightboxImage {
  image: ImageMetadata;
  full: string;
  width: number;
  height: number;
}

export function toLightboxImages(images: ImageMetadata[]): Promise<LightboxImage[]> {
  return Promise.all(
    images.map(async (image) => {
      const width = Math.min(image.width, FULL_WIDTH);
      const height = Math.round((image.height * width) / image.width);
      const full = await getImage({ src: image, width, format: 'webp' });
      return { image, full: full.src, width, height };
    }),
  );
}
