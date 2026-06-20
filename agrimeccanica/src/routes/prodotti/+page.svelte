<script lang="ts">
	import QuoteCTA from '$lib/components/QuoteCTA.svelte';
	import { categories } from '$lib/data/categories';
	import { productsByCategory, products } from '$lib/data/products';
</script>

<svelte:head>
	<title>Prodotti — L'Agrimeccanica</title>
	<meta
		name="description"
		content="Il catalogo L'Agrimeccanica: seminatrici, erpici classici e speciali, rulli, caricatori frontali, attrezzatura di supporto e molini. Oltre 25 modelli di produzione propria."
	/>
</svelte:head>

<!-- Hero -->
<section class="border-b border-border">
	<div class="mx-auto max-w-7xl px-4 py-16">
		<div class="h-1 w-12 bg-accent"></div>
		<h1 class="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-ink uppercase sm:text-5xl">
			Il nostro catalogo
		</h1>
		<p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
			Oltre {products.length} modelli di produzione propria, divisi in sette categorie. Ogni macchina
			è progettata per i terreni pugliesi e collaudata prima della consegna.
		</p>
	</div>
</section>

<!-- Categorie -->
<section class="mx-auto max-w-7xl px-4 py-14">
	<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each categories as cat (cat.slug)}
			{@const count = productsByCategory(cat.slug).length}
			<a
				href="/prodotti/{cat.slug}"
				class="group flex flex-col rounded-lg border border-border bg-surface p-7 transition-colors hover:border-muted hover:bg-surface-2"
			>
				<div class="flex items-start justify-between gap-3">
					<h2 class="text-xl font-bold text-ink">{cat.label}</h2>
					<span class="font-mono text-xs text-muted">{count} mod.</span>
				</div>
				<p class="mt-2 font-mono text-xs text-primary">{cat.tagline}</p>
				<p class="mt-3 flex-1 text-sm leading-relaxed text-muted">{cat.description}</p>
				<span
					class="mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-primary transition-transform group-hover:translate-x-0.5"
				>
					Vedi i modelli →
				</span>
			</a>
		{/each}
	</div>
</section>

<QuoteCTA />
