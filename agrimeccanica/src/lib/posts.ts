/**
 * Indice articoli del blog. Gli articoli sono file Markdown in src/posts/*.md,
 * compilati da mdsvex. La metadata (frontmatter) è esposta come `metadata`.
 */

export interface PostMeta {
	title: string;
	date: string; // ISO yyyy-mm-dd
	excerpt: string;
	author: string;
	category?: string;
}

export interface PostSummary extends PostMeta {
	slug: string;
}

const metaModules = import.meta.glob('/src/posts/*.md', { eager: true });

function slugOf(path: string): string {
	return path.split('/').pop()!.replace(/\.md$/, '');
}

/** Tutti gli articoli, dal più recente. */
export const posts: PostSummary[] = Object.entries(metaModules)
	.map(([path, mod]) => ({
		slug: slugOf(path),
		...(mod as { metadata: PostMeta }).metadata
	}))
	.sort((a, b) => b.date.localeCompare(a.date));

/** Data ISO → "15 gennaio 2026". */
export function formatDate(iso: string): string {
	return new Date(iso).toLocaleDateString('it-IT', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
}
