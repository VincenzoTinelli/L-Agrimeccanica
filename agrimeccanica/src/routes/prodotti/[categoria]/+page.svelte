<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import QuoteCTA from '$lib/components/QuoteCTA.svelte';
	import { categories } from '$lib/data/categories';

	let { data } = $props();
	const { category, products } = $derived(data);
	const others = $derived(categories.filter((c) => c.slug !== category.slug));
</script>

<svelte:head>
	<title>{category.label} — L'Agrimeccanica</title>
	<meta name="description" content={category.description} />
</svelte:head>

<!-- Hero categoria -->
<section class="border-b border-border">
	<div class="mx-auto max-w-7xl px-4 py-16">
		<nav class="font-mono text-xs text-muted">
			<a href="/prodotti" class="transition-colors hover:text-primary">Prodotti</a>
			<span class="text-border"> / </span>
			<span class="text-ink">{category.label}</span>
		</nav>
		<h1 class="mt-5 text-4xl font-extrabold tracking-tight text-ink uppercase sm:text-5xl">
			{category.label}
		</h1>
		<p class="mt-2 font-mono text-sm text-primary">{category.tagline}</p>
		<p class="mt-5 max-w-2xl text-lg text-muted">{category.description}</p>
		<p class="mt-6 font-mono text-xs text-muted">
			{products.length}
			{products.length === 1 ? 'modello' : 'modelli'} in gamma
		</p>
	</div>
</section>

<!-- Griglia prodotti -->
<section class="mx-auto max-w-7xl px-4 py-14">
	<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each products as product (product.code)}
			<ProductCard {product} />
		{/each}
	</div>
</section>

<QuoteCTA subtitle="Indica il modello che ti interessa: prepariamo un preventivo su misura per la tua azienda." />

<!-- Altre categorie -->
<section class="mx-auto max-w-7xl px-4 py-16">
	<h2 class="font-mono text-xs tracking-widest text-muted uppercase">Altre categorie</h2>
	<ul
		class="mt-5 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
	>
		{#each others as cat (cat.slug)}
			<li>
				<a
					href="/prodotti/{cat.slug}"
					class="group flex items-center justify-between gap-4 bg-surface px-5 py-5 transition-colors hover:bg-surface-2"
				>
					<span class="font-semibold text-ink">{cat.label}</span>
					<span class="font-mono text-primary transition-transform group-hover:translate-x-1">→</span>
				</a>
			</li>
		{/each}
	</ul>
</section>
