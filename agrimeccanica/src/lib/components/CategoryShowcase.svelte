<script lang="ts">
	import { categories } from '$lib/data/categories';
	import { productsByCategory, featuredByCategory } from '$lib/data/products';
	import { productImage } from '$lib/images';
	import ProductImage from '$lib/components/ProductImage.svelte';

	// Per ogni categoria: il prodotto-hero da mostrare in grande (preferendo uno
	// in evidenza che abbia una foto reale) + il numero di modelli a catalogo.
	// La verità sulla foto è `productImage(slug)` (la pipeline enhanced-img), non
	// il flag `hasPhoto`: così non mostriamo mai un placeholder se una foto esiste.
	const items = categories.map((cat) => {
		const all = productsByCategory(cat.slug);
		const hero =
			featuredByCategory(cat.slug).find((p) => productImage(p.slug)) ??
			all.find((p) => productImage(p.slug)) ??
			all[0];
		return { cat, hero, count: all.length };
	});

	let active = $state(0);
	const current = $derived(items[active]);

	// Su touch non vogliamo che un eventuale `mouseenter` "fantasma" pre-selezioni
	// la voce prima del tap (rovinerebbe il "primo tap = anteprima").
	function preview(i: number) {
		if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
			active = i;
		}
	}

	// Click: se la voce non è già attiva mostra la sua foto; se lo è, naviga.
	function onClick(e: MouseEvent, i: number) {
		if (i !== active) {
			e.preventDefault();
			active = i;
		}
	}

	// Frecce: spostano selezione + focus (orizzontale per le chip mobile,
	// verticale per la lista desktop).
	function onKeydown(e: KeyboardEvent, i: number) {
		const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
		if (!keys.includes(e.key)) return;
		e.preventDefault();
		const dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1;
		const next = (i + dir + items.length) % items.length;
		active = next;
		const list = (e.currentTarget as HTMLElement).closest('ul');
		list?.querySelectorAll<HTMLAnchorElement>('a')[next]?.focus();
	}
</script>

<section class="mx-auto max-w-7xl px-4 py-20">
	<div class="flex items-end justify-between gap-4">
		<h2 class="text-2xl font-bold tracking-tight text-ink uppercase sm:text-3xl">Cosa produciamo</h2>
		<a href="/prodotti" class="hidden font-mono text-sm text-primary hover:underline sm:inline">
			Tutto il catalogo →
		</a>
	</div>

	<div class="mt-10 grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-start lg:gap-8">
		<!-- Voci: chip orizzontali su mobile, lista verticale su desktop. Ogni voce è
		     un vero <a> verso la categoria → funziona anche senza JS. -->
		<nav aria-label="Categorie di prodotto">
			<ul
				class="flex snap-x gap-2 overflow-x-auto pb-2 [scrollbar-width:none] lg:flex-col lg:gap-0 lg:divide-y lg:divide-border lg:overflow-visible lg:rounded-lg lg:border lg:border-border lg:pb-0"
			>
				{#each items as it, i (it.cat.slug)}
					{@const isActive = active === i}
					<li class="shrink-0 snap-start lg:shrink">
						<a
							href="/prodotti/{it.cat.slug}"
							aria-current={isActive ? 'true' : undefined}
							onclick={(e) => onClick(e, i)}
							onmouseenter={() => preview(i)}
							onfocus={() => (active = i)}
							onkeydown={(e) => onKeydown(e, i)}
							class="block h-full rounded border px-4 py-3 whitespace-nowrap transition-colors lg:rounded-none lg:border-x-0 lg:border-t-0 lg:border-b-0 lg:px-5 lg:py-4 lg:whitespace-normal
							{isActive
								? 'border-primary bg-primary-soft lg:border-transparent'
								: 'border-border bg-surface hover:bg-surface-2 lg:bg-transparent lg:hover:bg-surface-2'}"
						>
							<span class="flex items-baseline justify-between gap-3">
								<span
									class="font-semibold lg:text-lg {isActive ? 'text-primary' : 'text-ink'}"
								>
									{it.cat.label}
								</span>
								<span class="font-mono text-xs whitespace-nowrap text-muted">
									{it.count}
									<span class="hidden lg:inline">mod.</span>
								</span>
							</span>
							<span class="mt-1 hidden text-sm leading-snug text-muted lg:block">
								{it.cat.tagline}
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Pannello foto: l'attrezzo è il protagonista. Link verso la categoria attiva. -->
		<a
			href="/prodotti/{current.cat.slug}"
			aria-label="Scopri la categoria {current.cat.label}"
			class="group relative block aspect-[16/9] overflow-hidden rounded-lg border border-border bg-bg lg:aspect-[16/10]"
		>
			{#each items as it, i (it.cat.slug)}
				<div
					class="absolute inset-0 transition-opacity duration-200 ease-out"
					class:opacity-100={i === active}
					class:opacity-0={i !== active}
					aria-hidden={i !== active}
				>
					<ProductImage
						product={it.hero}
						sizes="(min-width: 1024px) 60vw, 100vw"
						class="transition-transform duration-500 ease-out group-hover:scale-[1.02]"
					/>
				</div>
			{/each}

			<span
				class="absolute top-4 right-4 rounded border border-border bg-bg/80 px-2 py-1 font-mono text-xs text-muted backdrop-blur-sm"
			>
				{current.count} modelli
			</span>

			<!-- Velo grafite in basso per la leggibilità del testo sopra la foto. -->
			<div
				class="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-bg via-bg/70 to-transparent"
			></div>

			<div class="absolute inset-x-0 bottom-0 p-5 sm:p-6">
				<p class="font-mono text-xs tracking-wider text-primary">{current.hero.code}</p>
				<h3 class="mt-1 text-xl font-bold text-ink sm:text-2xl">{current.cat.label}</h3>
				<span class="mt-2 inline-flex items-center gap-1.5 font-mono text-sm text-primary">
					Scopri di più
					<span class="transition-transform group-hover:translate-x-0.5">→</span>
				</span>
			</div>
		</a>
	</div>
</section>
