/**
 * Risoluzione immagini ottimizzate (Fase 5).
 *
 * Gli asset in `src/lib/assets/{products,blog}` vengono processati a build-time
 * da `@sveltejs/enhanced-img` (AVIF/WebP + fallback + srcset responsive).
 * Qui li indicizziamo per slug così componenti e pagine possono risolvere
 * l'immagine giusta dinamicamente, senza import statici uno-a-uno.
 *
 * Non tutti i prodotti hanno una foto: `productImage(slug)` ritorna `undefined`
 * e il chiamante mostra il placeholder "blueprint".
 */

import type { Picture } from '@sveltejs/enhanced-img';

type PictureMap = Record<string, Picture>;

function indexBySlug(modules: Record<string, unknown>): PictureMap {
	const map: PictureMap = {};
	for (const [path, mod] of Object.entries(modules)) {
		const slug = path
			.split('/')
			.pop()!
			.replace(/\.(png|jpe?g|webp)$/i, '');
		map[slug] = mod as Picture;
	}
	return map;
}

const productModules = import.meta.glob('/src/lib/assets/products/*.{png,jpg,jpeg,webp}', {
	eager: true,
	query: { enhanced: true },
	import: 'default'
});

const blogModules = import.meta.glob('/src/lib/assets/blog/*.{png,jpg,jpeg,webp}', {
	eager: true,
	query: { enhanced: true },
	import: 'default'
});

/** slug prodotto → immagine ottimizzata, indicizzati a build-time. */
export const productImages: PictureMap = indexBySlug(productModules);

/** slug articolo → immagine di copertina. */
export const blogImages: PictureMap = indexBySlug(blogModules);

/** Immagine del prodotto, o `undefined` se non disponibile (→ placeholder). */
export function productImage(slug: string): Picture | undefined {
	return productImages[slug];
}

/** Copertina dell'articolo, o `undefined`. */
export function blogImage(slug: string): Picture | undefined {
	return blogImages[slug];
}
