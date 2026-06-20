<script lang="ts">
	import { site, productCategories } from '$lib/config/site';
	import { flagshipProducts } from '$lib/data/products';
	import { posts, formatDate } from '$lib/posts';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import QuoteCTA from '$lib/components/QuoteCTA.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import BlogCover from '$lib/components/BlogCover.svelte';

	const latestPosts = posts.slice(0, 3);

	const sampleSpecs = [
		['Tipo', 'Seminatrice pneumatica'],
		['Larghezza', '4,00 m · 34 gambali'],
		['Tramoggia', '600 kg + 110 kg'],
		['Produzione', 'Propria · Cisternino (BR)']
	];

	const values = [
		{ k: 'Qualità', v: 'Lavoro artigianale su ogni pezzo, testato prima della consegna.' },
		{ k: 'Locale', v: 'Radicati nelle Murge dal 1995, conosciamo i terreni pugliesi.' },
		{ k: 'Sempre', v: 'Assistenza e ricambi: al tuo fianco anche dopo l’acquisto.' }
	];

	const services = [
		{ t: 'Produzione', d: 'Progettiamo e costruiamo attrezzature agricole: oltre 25 modelli.' },
		{ t: 'Riparazione', d: 'Manutenzione di mezzi agricoli e movimento terra, lavorazione certosina.' },
		{ t: 'Ricambi & Assistenza', d: 'Disponibilità ricambi e supporto post-vendita diretto.' }
	];
</script>

<svelte:head>
	<title>{site.name}</title>
	<meta
		name="description"
		content="L'Agrimeccanica di Tinelli Giuseppe: produzione di attrezzature agricole e riparazioni nelle Murge dal 1995. Seminatrici, erpici, rulli, caricatori e molto altro."
	/>
</svelte:head>

<!-- HERO -->
<section class="border-b border-border">
	<div class="h-1 w-full bg-accent"></div>
	<div class="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
		<div class="flex flex-col justify-center">
			<p class="font-mono text-xs tracking-widest text-primary uppercase">
				est. 1995 · officina nelle Murge
			</p>
			<h1
				class="mt-5 text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] font-extrabold tracking-tight text-ink uppercase"
			>
				Robuste.<br />Affidabili.<br /><span class="text-primary">Costruite per durare.</span>
			</h1>
			<p class="mt-7 max-w-xl text-lg leading-relaxed text-muted">
				Produciamo attrezzature agricole e ripariamo mezzi da trent'anni. Lavoro artigianale su ogni
				pezzo, testato prima della consegna.
			</p>
			<div class="mt-9 flex flex-wrap gap-3">
				<Button href="/prodotti" size="lg">Scopri i prodotti</Button>
				<Button href="/contatti" size="lg" variant="outline">Richiedi preventivo</Button>
			</div>
			<dl class="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm text-muted">
				<div class="flex items-baseline gap-2">
					<dt class="text-2xl font-bold text-ink">30</dt>
					<dd>anni</dd>
				</div>
				<div class="flex items-baseline gap-2">
					<dt class="text-2xl font-bold text-ink">1500+</dt>
					<dd>macchine</dd>
				</div>
				<div class="flex items-baseline gap-2">
					<dt class="text-2xl font-bold text-ink">25+</dt>
					<dd>modelli</dd>
				</div>
			</dl>
		</div>

		<div class="flex items-center">
			<div class="w-full rounded-lg border border-border bg-surface">
				<div class="flex items-center justify-between border-b border-border px-5 py-4">
					<span class="font-mono text-sm font-bold tracking-wider text-ink">GT-400</span>
					<span class="font-mono text-xs text-accent">SCHEDA TECNICA</span>
				</div>
				<dl class="divide-y divide-border">
					{#each sampleSpecs as [k, v] (k)}
						<div class="flex items-baseline justify-between gap-4 px-5 py-3.5">
							<dt class="font-mono text-xs tracking-wide text-muted uppercase">{k}</dt>
							<dd class="text-right text-sm text-ink">{v}</dd>
						</div>
					{/each}
				</dl>
				<div class="border-t border-border px-5 py-4">
					<a
						href="/prodotti/seminatrici"
						class="font-mono text-xs text-primary hover:text-primary-strong"
					>
						Vedi la seminatrice →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CATEGORIE -->
<section class="mx-auto max-w-7xl px-4 py-20">
	<div class="flex items-end justify-between gap-4">
		<h2 class="text-2xl font-bold tracking-tight text-ink uppercase sm:text-3xl">Cosa produciamo</h2>
		<a href="/prodotti" class="hidden font-mono text-sm text-primary hover:underline sm:inline">
			Tutto il catalogo →
		</a>
	</div>
	<ul
		class="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
	>
		{#each productCategories as cat (cat.slug)}
			<li>
				<a
					href="/prodotti/{cat.slug}"
					class="group flex h-full items-center justify-between gap-4 bg-surface px-6 py-7 transition-colors hover:bg-surface-2"
				>
					<span class="text-lg font-semibold text-ink">{cat.label}</span>
					<span class="font-mono text-primary transition-transform group-hover:translate-x-1">→</span>
				</a>
			</li>
		{/each}
	</ul>
</section>

<!-- PRODOTTI DI PUNTA -->
<section class="border-t border-border bg-surface/40">
	<div class="mx-auto max-w-7xl px-4 py-20">
		<h2 class="text-2xl font-bold tracking-tight text-ink uppercase sm:text-3xl">Prodotti di punta</h2>
		<p class="mt-3 max-w-2xl text-muted">
			Una selezione dei modelli più richiesti. Ogni attrezzo è disponibile su richiesta, con
			preventivo su misura.
		</p>
		<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each flagshipProducts.slice(0, 4) as product (product.code)}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</section>

<!-- VALORI -->
<section class="mx-auto max-w-7xl px-4 py-20">
	<div class="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
		{#each values as v (v.k)}
			<div class="bg-surface p-8">
				<h3 class="text-xl font-bold text-primary uppercase">{v.k}</h3>
				<p class="mt-3 text-muted">{v.v}</p>
			</div>
		{/each}
	</div>
</section>

<!-- SERVIZI -->
<section class="border-t border-border bg-surface/40">
	<div class="mx-auto max-w-7xl px-4 py-20">
		<div class="flex items-end justify-between gap-4">
			<h2 class="text-2xl font-bold tracking-tight text-ink uppercase sm:text-3xl">
				Non solo produzione
			</h2>
			<a href="/servizi" class="hidden font-mono text-sm text-primary hover:underline sm:inline">
				Tutti i servizi →
			</a>
		</div>
		<div class="mt-10 grid gap-5 md:grid-cols-3">
			{#each services as s (s.t)}
				<div class="rounded-lg border border-border bg-surface p-7">
					<h3 class="text-lg font-semibold text-ink">{s.t}</h3>
					<p class="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

{#if latestPosts.length}
	<!-- DAL BLOG -->
	<section class="mx-auto max-w-7xl px-4 py-20">
		<div class="flex items-end justify-between gap-4">
			<h2 class="text-2xl font-bold tracking-tight text-ink uppercase sm:text-3xl">Dal blog</h2>
			<a href="/blog" class="hidden font-mono text-sm text-primary hover:underline sm:inline">
				Tutti gli articoli →
			</a>
		</div>
		<ul class="mt-10 grid gap-5 md:grid-cols-3">
			{#each latestPosts as post (post.slug)}
				<li>
					<a
						href="/blog/{post.slug}"
						class="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-muted hover:bg-surface-2"
					>
						<div class="aspect-[16/9] overflow-hidden border-b border-border bg-bg">
							<BlogCover
								slug={post.slug}
								alt={post.title}
								class="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
							/>
						</div>
						<div class="flex flex-1 flex-col p-6">
							<p class="font-mono text-xs text-primary">
								{post.category ?? 'Articolo'} · {formatDate(post.date)}
							</p>
							<h3 class="mt-3 text-lg font-bold text-ink">{post.title}</h3>
							<p class="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
							<span class="mt-5 font-mono text-sm text-primary">Leggi →</span>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</section>
{/if}

<QuoteCTA />
