import { error } from '@sveltejs/kit';
import { getCategory, categories } from '$lib/data/categories';
import { productsByCategory } from '$lib/data/products';
import type { EntryGenerator, PageLoad } from './$types';

// Prerendera una pagina statica per ognuna delle 7 categorie.
export const entries: EntryGenerator = () => categories.map((c) => ({ categoria: c.slug }));

export const load: PageLoad = ({ params }) => {
	const category = getCategory(params.categoria);
	if (!category) error(404, 'Categoria non trovata');
	return { category, products: productsByCategory(category.slug) };
};
