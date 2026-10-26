// Apre a schermo intero (PhotoSwipe) i link dentro ogni elemento [data-lightbox].
// I link devono avere data-pswp-width e data-pswp-height.
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export function initLightboxes(root: ParentNode = document) {
  // Più componenti possono chiamarla sulla stessa pagina: ogni galleria va inizializzata una volta sola.
  root.querySelectorAll<HTMLElement>('[data-lightbox]:not([data-lightbox-ready])').forEach((gallery) => {
    gallery.dataset.lightboxReady = '';
    const lightbox = new PhotoSwipeLightbox({
      gallery,
      children: 'a[data-pswp-width]',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();
  });
}
