/**
 * Le 7 categorie di prodotto. Sorgente unica: la nav (site.config) ne deriva
 * slug + label, le pagine /prodotti/[categoria] leggono qui hero e descrizione.
 * Tassonomia allineata alle pagine reali del sito (dic 2025).
 */

export interface Category {
	slug: string;
	label: string;
	/** descrittore breve (1 riga), usato sotto il titolo categoria */
	tagline: string;
	/** 1–2 frasi per l'hero della pagina categoria */
	description: string;
	/** ordine in nav e catalogo */
	order: number;
}

export const categories: Category[] = [
	{
		slug: 'seminatrici',
		label: 'Seminatrici',
		tagline: 'Semina precisa, pneumatica e meccanica',
		description:
			'Seminatrici per ogni appezzamento, dalla compatta da 2,35 m alla pneumatica da 4 m. Distribuzione uniforme del seme, testata prima della consegna.',
		order: 1
	},
	{
		slug: 'erpici-classici',
		label: 'Erpici Classici',
		tagline: 'Erpici a molle per la preparazione del terreno',
		description:
			'La gamma completa di erpici a molle, da 1,2 a 4,9 m. Dissodamento, arieggiatura e preparazione del letto di semina, con sistema Start&Stop e marcatura CE.',
		order: 2
	},
	{
		slug: 'erpici-speciali',
		label: 'Erpici Speciali',
		tagline: 'Erpici pesanti e translatori',
		description:
			'Lavorazioni intense fino a 25 cm di profondità e traslazione laterale idraulica per lavorare a ridosso di filari, muretti e ostacoli.',
		order: 3
	},
	{
		slug: 'rulli',
		label: 'Rulli',
		tagline: 'Rulli dopo-semina per la compattazione',
		description:
			'Compattazione ottimale del terreno per migliorare il contatto seme-suolo e la germinazione. Dal compatto da 2,54 m al professionale da 6 m autolivellante.',
		order: 4
	},
	{
		slug: 'caricatori-frontali',
		label: 'Caricatori Frontali',
		tagline: 'Caricatori e movimentazione',
		description:
			'Caricatori frontali con autolivellante meccanico e aggancio rapido, montati sul tuo trattore. Benna, forchettone e accessori per ogni operazione.',
		order: 5
	},
	{
		slug: 'attrezzatura-di-supporto',
		label: 'Attrezzatura di Supporto',
		tagline: 'Gli attrezzi che semplificano il lavoro',
		description:
			'Agitatori per liquame, raschiatori universali e spaccalegna idraulici: gli attrezzi che semplificano il lavoro quotidiano in azienda.',
		order: 6
	},
	{
		slug: 'frantumazione-cereali',
		label: 'Frantumazione Cereali',
		tagline: 'Molini per cereali e mangimi',
		description:
			'Molini elettrici per la macinazione di cereali e mangimi in proprio: autonomia, qualità costante e risparmio economico.',
		order: 7
	}
];

export function getCategory(slug: string): Category | undefined {
	return categories.find((c) => c.slug === slug);
}
