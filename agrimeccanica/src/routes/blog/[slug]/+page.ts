import { error } from '@sveltejs/kit';
import { posts } from '$lib/posts';
import type { EntryGenerator, PageLoad } from './$types';

// Prerendera una pagina per ogni articolo.
export const entries: EntryGenerator = () => posts.map((p) => ({ slug: p.slug }));

export const load: PageLoad = async ({ params }) => {
	try {
		const article = await import(`../../../posts/${params.slug}.md`);
		return {
			content: article.default,
			meta: article.metadata,
			slug: params.slug
		};
	} catch {
		error(404, 'Articolo non trovato');
	}
};
