<script lang="ts">
	import campoMurge from '$lib/assets/hero/campo-murge.png?enhanced';
	import trattoreLavoro from '$lib/assets/hero/trattore-lavoro.png?enhanced';
	import officina from '$lib/assets/hero/officina-riparazione.png?enhanced';
	import Button from '$lib/components/ui/Button.svelte';

	// Le tre slide riprendono l'anima dell'originale: il territorio, la macchina al
	// lavoro, l'officina. In bianco e nero per non litigare con verde/arancio del tema.
	const slides = [
		{ img: campoMurge, label: 'Le Murge' },
		{ img: trattoreLavoro, label: 'In campo' },
		{ img: officina, label: 'In officina' }
	];

	// `autoplay = false` blocca il crossfade sulla prima slide (utile per confronti).
	let { autoplay = true }: { autoplay?: boolean } = $props();

	let active = $state(0);
	// Incrementato a ogni scelta manuale: fa ripartire il timer dell'avanzamento
	// così la slide cliccata "resta" e non viene scavalcata dopo pochi secondi.
	let restart = $state(0);

	function goTo(i: number) {
		active = i;
		restart++;
	}

	// Crossfade automatico — sospeso se l'utente preferisce meno movimento.
	$effect(() => {
		restart; // dipendenza: il click ricrea l'intervallo da capo
		if (!autoplay) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const id = setInterval(() => {
			active = (active + 1) % slides.length;
		}, 6000);
		return () => clearInterval(id);
	});

	const stats = [
		{ n: '30', u: 'anni di officina' },
		{ n: '1500+', u: 'macchine costruite' },
		{ n: '25+', u: 'modelli a catalogo' }
	];
</script>

<section class="hero">
	<div class="hero-bg" aria-hidden="true">
		{#each slides as slide, i (i)}
			<div class="hero-layer" class:is-active={active === i}>
				<enhanced:img
					src={slide.img}
					alt=""
					sizes="100vw"
					fetchpriority={i === 0 ? 'high' : 'auto'}
					loading={i === 0 ? 'eager' : 'lazy'}
				/>
			</div>
		{/each}
	</div>
	<div class="hero-scrim" aria-hidden="true"></div>

	<div class="hero-inner mx-auto w-full max-w-7xl px-4">
		<p class="hero-eyebrow font-mono text-xs tracking-widest text-primary uppercase">
			est. 1995 · officina nelle Murge
		</p>
		<h1 class="hero-title">
			Robuste. Affidabili.<br /><span class="text-primary">Costruite per durare.</span>
		</h1>
		<p class="hero-sub max-w-xl text-lg leading-relaxed text-ink/85">
			Attrezzature agricole di produzione propria, collaudate prima della consegna. Trent'anni di
			lavoro artigianale al servizio della tua azienda — e un'officina che non ti lascia a piedi.
		</p>
		<div class="hero-cta flex flex-wrap gap-3">
			<Button href="/prodotti" size="lg">Scopri i prodotti</Button>
			<Button href="/contatti" size="lg" variant="outline">Richiedi preventivo</Button>
		</div>
		<dl class="hero-stats">
			{#each stats as s (s.u)}
				<div>
					<dt class="font-mono text-3xl font-bold text-ink">{s.n}</dt>
					<dd class="mt-1 font-mono text-xs tracking-wide text-muted">{s.u}</dd>
				</div>
			{/each}
		</dl>

		<div class="hero-dots" role="tablist" aria-label="Immagini in evidenza">
			{#each slides as slide, i (i)}
				<button
					type="button"
					role="tab"
					aria-selected={active === i}
					aria-label={slide.label}
					class="hero-dot"
					class:is-active={active === i}
					onclick={() => goTo(i)}
				></button>
			{/each}
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		isolation: isolate;
		display: flex;
		align-items: center;
		min-height: clamp(34rem, 80vh, 48rem);
		overflow: hidden;
		border-bottom: 1px solid var(--color-border);
	}

	/* Sfondo a strati con crossfade */
	.hero-bg {
		position: absolute;
		inset: 0;
		z-index: -2;
		background: var(--color-bg);
	}
	.hero-layer {
		position: absolute;
		inset: 0;
		opacity: 0;
		transition: opacity 1200ms cubic-bezier(0.22, 1, 0.36, 1);
	}
	.hero-layer.is-active {
		opacity: 1;
	}
	.hero-layer :global(picture) {
		display: block;
		height: 100%;
	}
	.hero-layer :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		/* desatura e scurisce leggermente per fondersi col tema acciaio */
		filter: grayscale(1) contrast(1.05) brightness(0.85);
	}
	.hero-layer.is-active :global(img) {
		animation: kenburns 7s ease-out both;
	}
	@keyframes kenburns {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.07);
		}
	}

	/* Velo grafite per leggibilità del testo (più denso a sinistra e in basso) */
	.hero-scrim {
		position: absolute;
		inset: 0;
		z-index: -1;
		background:
			linear-gradient(
				100deg,
				var(--color-bg) 0%,
				color-mix(in oklch, var(--color-bg) 82%, transparent) 40%,
				color-mix(in oklch, var(--color-bg) 30%, transparent) 100%
			),
			linear-gradient(0deg, var(--color-bg) 0%, transparent 42%);
	}

	.hero-inner {
		position: relative;
		padding-top: 5rem;
		padding-bottom: 5rem;
	}

	.hero-title {
		margin-top: 1.25rem;
		font-size: clamp(2.5rem, 6vw, 4.5rem);
		font-weight: 800;
		line-height: 0.95;
		letter-spacing: -0.02em;
		text-transform: uppercase;
		text-wrap: balance;
		color: var(--color-ink);
	}
	.hero-sub {
		margin-top: 1.75rem;
	}
	.hero-cta {
		margin-top: 2.25rem;
	}
	.hero-stats {
		display: flex;
		flex-wrap: wrap;
		gap: 2.5rem;
		margin-top: 3rem;
	}

	.hero-dots {
		display: flex;
		gap: 0.5rem;
		margin-top: 2.5rem;
	}
	.hero-dot {
		width: 2.25rem;
		height: 3px;
		background: color-mix(in oklch, var(--color-ink) 28%, transparent);
		transition: background-color 250ms ease;
		cursor: pointer;
	}
	.hero-dot:hover {
		background: color-mix(in oklch, var(--color-ink) 50%, transparent);
	}
	.hero-dot.is-active {
		background: var(--color-primary);
	}
	.hero-dot:focus-visible {
		outline: 2px solid var(--color-primary);
		outline-offset: 3px;
	}

	/* Entrata orchestrata al caricamento (su contenuto comunque visibile di base) */
	.hero-eyebrow,
	.hero-title,
	.hero-sub,
	.hero-cta,
	.hero-stats {
		animation: hero-rise 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
	}
	.hero-title {
		animation-delay: 90ms;
	}
	.hero-sub {
		animation-delay: 180ms;
	}
	.hero-cta {
		animation-delay: 270ms;
	}
	.hero-stats {
		animation-delay: 360ms;
	}
	@keyframes hero-rise {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-layer {
			transition: none;
		}
		.hero-layer.is-active :global(img),
		.hero-eyebrow,
		.hero-title,
		.hero-sub,
		.hero-cta,
		.hero-stats {
			animation: none;
		}
	}
</style>
