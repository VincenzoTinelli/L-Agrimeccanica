<script lang="ts">
	import { formatDate } from '$lib/posts';
	import QuoteCTA from '$lib/components/QuoteCTA.svelte';
	import BlogCover from '$lib/components/BlogCover.svelte';

	let { data } = $props();
	// data.content è il componente Svelte compilato da mdsvex.
	const Content = $derived(data.content);
</script>

<svelte:head>
	<title>{data.meta.title} — L'Agrimeccanica</title>
	<meta name="description" content={data.meta.excerpt} />
</svelte:head>

<article class="mx-auto max-w-3xl px-4 py-16">
	<nav class="font-mono text-xs text-muted">
		<a href="/blog" class="transition-colors hover:text-primary">← Blog</a>
	</nav>

	<header class="mt-8 border-b border-border pb-8">
		<p class="font-mono text-xs text-primary">
			{data.meta.category ?? 'Articolo'} · {formatDate(data.meta.date)}
		</p>
		<h1 class="mt-4 text-4xl font-extrabold tracking-tight text-ink uppercase">
			{data.meta.title}
		</h1>
		<p class="mt-4 font-mono text-sm text-muted">di {data.meta.author}</p>
	</header>

	<div class="mt-10 aspect-[16/9] overflow-hidden rounded-lg border border-border bg-bg">
		<BlogCover slug={data.slug} alt={data.meta.title} sizes="(min-width: 768px) 48rem, 100vw" priority />
	</div>

	<div
		class="prose prose-invert mt-10 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-ink prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-li:marker:text-primary"
	>
		<Content />
	</div>
</article>

<QuoteCTA />
