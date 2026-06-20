<script lang="ts">
	import { posts, formatDate } from '$lib/posts';
	import QuoteCTA from '$lib/components/QuoteCTA.svelte';
</script>

<svelte:head>
	<title>Blog — L'Agrimeccanica</title>
	<meta
		name="description"
		content="Guide, consigli e novità per l'agricoltura delle Murge: scelta e manutenzione delle attrezzature, finanza agevolata e tecniche di lavorazione del terreno."
	/>
</svelte:head>

<!-- Hero -->
<section class="border-b border-border">
	<div class="mx-auto max-w-7xl px-4 py-16">
		<div class="h-1 w-12 bg-accent"></div>
		<h1 class="mt-6 text-4xl font-extrabold tracking-tight text-ink uppercase sm:text-5xl">Blog</h1>
		<p class="mt-5 max-w-2xl text-lg text-muted">
			Guide pratiche, consigli e novità per chi lavora la terra nelle Murge.
		</p>
	</div>
</section>

<!-- Lista articoli -->
<section class="mx-auto max-w-7xl px-4 py-14">
	{#if posts.length}
		<ul class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
			{#each posts as post (post.slug)}
				<li>
					<a
						href="/blog/{post.slug}"
						class="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-muted hover:bg-surface-2"
					>
						<p class="font-mono text-xs text-primary">
							{post.category ?? 'Articolo'} · {formatDate(post.date)}
						</p>
						<h2 class="mt-3 text-xl font-bold text-ink">{post.title}</h2>
						<p class="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
						<span
							class="mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-primary transition-transform group-hover:translate-x-0.5"
						>
							Leggi l'articolo →
						</span>
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p class="font-mono text-sm text-muted">Nessun articolo pubblicato.</p>
	{/if}
</section>

<QuoteCTA />
