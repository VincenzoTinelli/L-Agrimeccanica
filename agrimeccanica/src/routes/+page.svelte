<script lang="ts">
	import { site } from '$lib/config/site';
	import { flagshipProducts } from '$lib/data/products';
	import { posts, formatDate } from '$lib/posts';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import QuoteCTA from '$lib/components/QuoteCTA.svelte';
	import BlogCover from '$lib/components/BlogCover.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import CategoryShowcase from '$lib/components/CategoryShowcase.svelte';

	const latestPosts = posts.slice(0, 3);

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

<Hero />

<!-- CATEGORIE -->
<CategoryShowcase />

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
