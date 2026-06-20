<script lang="ts">
	import { products } from '$lib/data/products';
	import { categories, getCategory } from '$lib/data/categories';
	import { productImage } from '$lib/images';
	import ProductImage from '$lib/components/ProductImage.svelte';
	import QuoteCTA from '$lib/components/QuoteCTA.svelte';

	// Solo i prodotti con un'immagine reale: la galleria mostra i macchinari, non i codici.
	const items = products.filter((p) => productImage(p.slug));

	// Categorie che hanno almeno un'immagine, in ordine catalogo.
	const usedCategories = categories.filter((c) => items.some((p) => p.category === c.slug));

	let activeCat = $state<string>('all');
	const filtered = $derived(
		activeCat === 'all' ? items : items.filter((p) => p.category === activeCat)
	);

	// Lightbox
	let lightboxIndex = $state<number | null>(null);
	const current = $derived(lightboxIndex === null ? null : filtered[lightboxIndex]);

	function open(i: number) {
		lightboxIndex = i;
	}
	function close() {
		lightboxIndex = null;
	}
	function step(delta: number) {
		if (lightboxIndex === null) return;
		lightboxIndex = (lightboxIndex + delta + filtered.length) % filtered.length;
	}

	function setCat(slug: string) {
		activeCat = slug;
		close(); // gli indici del lightbox si riferiscono alla lista filtrata
	}

	function onKey(e: KeyboardEvent) {
		if (lightboxIndex === null) return;
		if (e.key === 'Escape') close();
		else if (e.key === 'ArrowRight') step(1);
		else if (e.key === 'ArrowLeft') step(-1);
	}
</script>

<svelte:head>
	<title>Galleria — L'Agrimeccanica</title>
	<meta
		name="description"
		content="La galleria dei macchinari L'Agrimeccanica: seminatrici, erpici, rulli, caricatori e attrezzature in lavoro nei campi delle Murge."
	/>
</svelte:head>

<svelte:window onkeydown={onKey} />

<!-- Hero -->
<section class="border-b border-border">
	<div class="mx-auto max-w-7xl px-4 py-16">
		<div class="h-1 w-12 bg-accent"></div>
		<h1 class="mt-6 text-4xl font-extrabold tracking-tight text-ink uppercase sm:text-5xl">Galleria</h1>
		<p class="mt-5 max-w-2xl text-lg text-muted">
			I nostri macchinari al lavoro nei campi delle Murge. {items.length} modelli del catalogo, in dettaglio.
		</p>
	</div>
</section>

<!-- Filtri -->
<section class="mx-auto max-w-7xl px-4 pt-10">
	<div class="flex flex-wrap gap-2" role="group" aria-label="Filtra per categoria">
		<button
			type="button"
			onclick={() => setCat('all')}
			aria-pressed={activeCat === 'all'}
			class="rounded border px-3.5 py-1.5 font-mono text-xs tracking-wide transition-colors {activeCat ===
			'all'
				? 'border-primary bg-primary text-on-brand'
				: 'border-border text-muted hover:border-muted hover:text-ink'}"
		>
			Tutti <span class="opacity-70">({items.length})</span>
		</button>
		{#each usedCategories as cat (cat.slug)}
			{@const n = items.filter((p) => p.category === cat.slug).length}
			<button
				type="button"
				onclick={() => setCat(cat.slug)}
				aria-pressed={activeCat === cat.slug}
				class="rounded border px-3.5 py-1.5 font-mono text-xs tracking-wide transition-colors {activeCat ===
				cat.slug
					? 'border-primary bg-primary text-on-brand'
					: 'border-border text-muted hover:border-muted hover:text-ink'}"
			>
				{cat.label} <span class="opacity-70">({n})</span>
			</button>
		{/each}
	</div>
</section>

<!-- Griglia -->
<section class="mx-auto max-w-7xl px-4 py-10">
	<ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each filtered as product, i (product.slug)}
			<li>
				<button
					type="button"
					onclick={() => open(i)}
					class="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-bg text-left transition-colors hover:border-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
				>
					<ProductImage
						{product}
						sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
						class="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
					/>
					<!-- Etichetta in basso -->
					<div
						class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent p-4"
					>
						<div>
							<p class="font-mono text-sm font-bold tracking-wider text-ink">{product.code}</p>
							<p class="mt-0.5 font-mono text-[0.65rem] tracking-wide text-primary uppercase">
								{getCategory(product.category)?.label}
							</p>
						</div>
						<span
							class="font-mono text-xs text-muted opacity-0 transition-opacity group-hover:opacity-100"
						>
							ingrandisci ⤢
						</span>
					</div>
				</button>
			</li>
		{/each}
	</ul>
</section>

<!-- Lightbox -->
{#if current}
	{@const pic = productImage(current.slug)}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-bg/90 p-4 backdrop-blur-sm sm:p-8"
		role="dialog"
		aria-modal="true"
		aria-label="{current.code} {current.name}"
	>
		<!-- Sfondo cliccabile per chiudere -->
		<button type="button" class="absolute inset-0 cursor-zoom-out" aria-label="Chiudi" onclick={close}
		></button>

		<div class="relative z-10 flex w-full max-w-5xl flex-col">
			<div
				class="relative overflow-hidden rounded-lg border border-border bg-surface shadow-2xl shadow-black/50"
			>
				{#if pic}
					<enhanced:img
						src={pic}
						alt="{current.code} — {current.name}"
						sizes="(min-width: 1024px) 64rem, 100vw"
						class="h-auto max-h-[72vh] w-full object-contain"
					/>
				{/if}
			</div>

			<!-- Barra info -->
			<div class="mt-4 flex flex-wrap items-center justify-between gap-4">
				<div>
					<p class="font-mono text-sm font-bold tracking-wider text-ink">{current.code}</p>
					<p class="mt-1 text-sm text-muted">{current.name.replace(current.code, '').trim()}</p>
				</div>
				<a
					href="/contatti?prodotto={current.code}"
					class="inline-flex items-center gap-1.5 rounded bg-primary px-4 py-2 font-mono text-sm font-semibold text-on-brand transition-colors hover:bg-primary-strong"
				>
					Richiedi preventivo →
				</a>
			</div>
		</div>

		<!-- Controlli -->
		<button
			type="button"
			onclick={close}
			aria-label="Chiudi galleria"
			class="absolute top-4 right-4 z-20 flex size-11 items-center justify-center rounded-full border border-border bg-surface font-mono text-lg text-ink transition-colors hover:bg-surface-2"
		>
			✕
		</button>
		{#if filtered.length > 1}
			<button
				type="button"
				onclick={() => step(-1)}
				aria-label="Immagine precedente"
				class="absolute left-2 z-20 flex size-11 items-center justify-center rounded-full border border-border bg-surface text-xl text-ink transition-colors hover:bg-surface-2 sm:left-4"
			>
				‹
			</button>
			<button
				type="button"
				onclick={() => step(1)}
				aria-label="Immagine successiva"
				class="absolute right-2 z-20 flex size-11 items-center justify-center rounded-full border border-border bg-surface text-xl text-ink transition-colors hover:bg-surface-2 sm:right-4"
			>
				›
			</button>
		{/if}
	</div>
{/if}

<QuoteCTA />
