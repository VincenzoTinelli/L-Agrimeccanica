<script lang="ts">
	import QuoteCTA from '$lib/components/QuoteCTA.svelte';

	const numbers = [
		['30', 'anni di attività'],
		['1500+', 'macchine consegnate'],
		['1000+', 'clienti soddisfatti'],
		['25+', 'modelli in gamma']
	];

	const valori = [
		{ t: 'Qualità artigianale', d: 'Lavorazione certosina che riflette l’esperienza di 30 anni. Materiali resistenti, attenzione ai dettagli in ogni fase.' },
		{ t: 'Radicamento', d: 'Un legame forte con il territorio delle Murge e una conoscenza diretta delle esigenze degli agricoltori locali.' },
		{ t: 'Affidabilità', d: 'Prodotti robusti e duraturi, prestazioni costanti nel tempo e assistenza post-vendita sempre disponibile.' },
		{ t: 'Dedizione al cliente', d: 'Impegno costante per aiutare gli agricoltori a ottenere il massimo rendimento dal proprio terreno.' }
	];

	const metodo = [
		{ n: '01', t: 'Ascolto', d: 'Capiamo terreno, colture ed esigenze della tua azienda.' },
		{ n: '02', t: 'Progettazione', d: 'Definiamo l’attrezzo giusto, anche con personalizzazioni.' },
		{ n: '03', t: 'Costruzione', d: 'Realizziamo e collaudiamo ogni macchina prima della consegna.' },
		{ n: '04', t: 'Assistenza', d: 'Ti seguiamo con ricambi e manutenzione negli anni.' }
	];
</script>

<svelte:head>
	<title>Chi Siamo — L'Agrimeccanica</title>
	<meta
		name="description"
		content="L'Agrimeccanica di Tinelli Giuseppe: 30 anni di esperienza nella produzione di attrezzature agricole e nelle riparazioni, nel cuore delle Murge."
	/>
</svelte:head>

<!-- Hero -->
<section class="border-b border-border">
	<div class="mx-auto max-w-7xl px-4 py-16">
		<div class="h-1 w-12 bg-accent"></div>
		<h1 class="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-ink uppercase sm:text-5xl">
			Trent'anni di lavoro nelle Murge
		</h1>
		<p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
			L'Agrimeccanica nasce nel 1995, quasi per scherzo, da Giuseppe Tinelli. Da piccola officina si è
			trasformata in un punto di riferimento per centinaia di agricoltori del territorio, tra
			produzione di attrezzature e riparazione di mezzi agricoli.
		</p>
	</div>
</section>

<!-- Numeri -->
<section class="border-b border-border bg-surface/40">
	<dl class="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 lg:grid-cols-4">
		{#each numbers as [n, label] (label)}
			<div>
				<dt class="font-mono text-4xl font-extrabold text-ink">{n}</dt>
				<dd class="mt-1 text-sm text-muted">{label}</dd>
			</div>
		{/each}
	</dl>
</section>

<!-- Storia -->
<section class="mx-auto max-w-7xl px-4 py-20">
	<div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
		<h2 class="text-2xl font-bold tracking-tight text-ink uppercase sm:text-3xl">
			Dalla prima officina a oggi
		</h2>
		<div class="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
			<p>
				Quello che era iniziato come un piccolo laboratorio è cresciuto fino a diventare una realtà
				consolidata del settore agromeccanico, con una doppia anima: la <strong class="text-ink"
					>produzione</strong
				> di seminatrici, erpici, rulli e attrezzature di ogni tipo, e la
				<strong class="text-ink">riparazione</strong> di mezzi agricoli e movimento terra.
			</p>
			<p>
				La nostra missione è semplice: fornire attrezzature di qualità e servizi affidabili agli
				agricoltori del territorio, con soluzioni efficienti e durature per migliorare il loro lavoro
				quotidiano.
			</p>
		</div>
	</div>
</section>

<!-- Valori -->
<section class="border-t border-border bg-surface/40">
	<div class="mx-auto max-w-7xl px-4 py-20">
		<h2 class="text-2xl font-bold tracking-tight text-ink uppercase sm:text-3xl">I nostri valori</h2>
		<div class="mt-10 grid gap-5 sm:grid-cols-2">
			{#each valori as v (v.t)}
				<div class="rounded-lg border border-border bg-surface p-7">
					<h3 class="text-lg font-semibold text-primary">{v.t}</h3>
					<p class="mt-3 leading-relaxed text-muted">{v.d}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Metodo -->
<section class="mx-auto max-w-7xl px-4 py-20">
	<h2 class="text-2xl font-bold tracking-tight text-ink uppercase sm:text-3xl">Come lavoriamo</h2>
	<ol class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
		{#each metodo as step (step.n)}
			<li class="rounded-lg border border-border bg-surface p-6">
				<span class="font-mono text-sm font-bold text-accent">{step.n}</span>
				<h3 class="mt-3 text-lg font-semibold text-ink">{step.t}</h3>
				<p class="mt-2 text-sm leading-relaxed text-muted">{step.d}</p>
			</li>
		{/each}
	</ol>
</section>

<QuoteCTA title="Lavoriamo insieme" subtitle="Vieni a trovarci in officina a Cisternino o chiamaci: troviamo la soluzione giusta per te." />
