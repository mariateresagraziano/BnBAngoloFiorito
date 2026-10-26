import type { ImageMetadata } from 'astro';

type GlobResult = Record<string, { default: ImageMetadata }>;

/** Immagini di un import.meta.glob il cui nome file inizia con `prefix`, ordinate per nome. */
export function imagesByPrefix(files: GlobResult, prefix: string): ImageMetadata[] {
  return Object.keys(files)
    .filter((path) => path.split('/').pop()!.startsWith(prefix))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((path) => files[path].default);
}
