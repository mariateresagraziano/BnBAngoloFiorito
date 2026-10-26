## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Component structure (atomic design)

Components in `src/components/` follow atomic design. When markup repeats, extract it to the lowest fitting level and reuse it.

- `atoms/` – smallest UI pieces, no dependencies on other components (Button, Logo, IconLink, SectionHeading, IconBadge, FormField, MapEmbed)
- `molecules/` – small groups of atoms (ContactList, SocialLinks, LanguageSwitcher, IconList, MediaBlock, RoomCard, AmenityCard, PhotoGrid, DataTable, PolicyConsent)
- `organisms/` – page sections (TopBar, Header, MobileNav, Footer, HeroCarousel, ImageSlider, PageTitle, Motto, TileDivider, RoomsSection, RoomDetail, AmenitiesSection, MediaList, GallerySection, MapSection, ProseSection, ContactForm, ContactCard)
- `templates/` – page layouts (BaseLayout)
- `pages/` – full page compositions taking `lang`; route files in `src/pages/` and `src/pages/en/` only render these

Shared client scripts live in `src/scripts/` (e.g. `lightbox.ts`: PhotoSwipe for any `[data-lightbox]` container); build-time helpers in `src/lib/` (e.g. `toLightboxImages`). Galleries load images with `import.meta.glob` + `imagesByPrefix` (`src/data/images.ts`), so adding a file with the right prefix adds the photo.

UI strings live in `src/i18n/ui.ts`; structured content (contacts, rooms, amenities, rates…) in `src/data/*.ts` with `Record<Lang, string>` fields; long-form text (terms, privacy) as Markdown in the `legal` content collection (`src/content/legal/<lang>/<slug>.md`, Italian fallback). All of it will later move to DatoCMS.

## Hosting and forms

The site is a static build deployed via FTP to Aruba (Apache + PHP). Files in `public/` are copied as-is:

- `public/api/mail.php` handles both forms (`type=contatti|prenotazione`), verifies Cloudflare Turnstile server-side, replies JSON `{ ok, code }`; messages are translated client-side in `ContactForm.astro`. Secrets go in `public/api/config.php` (git-ignored, copy from `config.example.php`); the Turnstile site key comes from `PUBLIC_TURNSTILE_SITE_KEY` (`.env`).
- `public/.htaccess` redirects the old `*.php` URLs and serves `404.html`.
- PHP does not run under `astro dev`: test the forms on Aruba (or a local PHP server).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
