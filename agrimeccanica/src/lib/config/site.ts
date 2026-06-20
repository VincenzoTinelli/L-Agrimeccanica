/**
 * Single source of truth per dati azienda, navigazione e contatti.
 * Header, footer e CTA leggono tutti da qui: niente più link duplicati
 * (e quindi niente più navigazione rotta come nel vecchio sito HTML).
 */

import { categories } from '$lib/data/categories';

export const site = {
	name: "L'Agrimeccanica di Tinelli Giuseppe",
	shortName: "L'Agrimeccanica",
	tagline: 'Attrezzature agricole e riparazioni nelle Murge dal 1995',
	founded: 1995,
	contacts: {
		phoneDisplay: '349 588 4813',
		phoneHref: 'tel:+393495884813',
		email: "l'agrimeccanica@hotmail.it",
		address: {
			street: 'Contrada Figazzano, Via dei Trulli, 14',
			city: 'Cisternino (BR)',
			region: 'Puglia'
		}
	}
} as const;

/**
 * Le 7 categorie per nav e footer, derivate dalla sorgente unica `categories`
 * (src/lib/data/categories.ts) così slug/label non si duplicano mai.
 */
export const productCategories = categories.map((c) => ({ slug: c.slug, label: c.label }));

/** Voci del menu principale. Le rotte esistono tutte (niente link a vuoto). */
export const mainNav = [
	{ href: '/', label: 'Home' },
	{ href: '/prodotti', label: 'Prodotti' },
	{ href: '/servizi', label: 'Servizi' },
	{ href: '/chi-siamo', label: 'Chi Siamo' },
	{ href: '/galleria', label: 'Galleria' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/faq', label: 'FAQ' },
	{ href: '/contatti', label: 'Contatti' }
] as const;
