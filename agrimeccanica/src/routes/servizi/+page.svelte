<script lang="ts">
	import QuoteCTA from '$lib/components/QuoteCTA.svelte';

	const main = [
		{
			n: '01',
			t: 'Produzione di attrezzature',
			d: 'Progettiamo e costruiamo in proprio oltre 25 modelli: seminatrici, erpici, rulli, caricatori e attrezzi speciali. Ogni macchina è collaudata prima della consegna.',
			points: ['Progettazione su misura', 'Costruzione artigianale', 'Collaudo prima della consegna'],
			href: '/prodotti',
			cta: 'Vedi il catalogo'
		},
		{
			n: '02',
			t: 'Riparazione e manutenzione',
			d: "Manutenzione ordinaria e straordinaria di mezzi agricoli e movimento terra. Lavorazione certosina su ogni tipologia di macchinario, anche di altri produttori.",
			points: ['Mezzi agricoli e movimento terra', 'Interventi ordinari e straordinari', 'Lavorazione di precisione'],
			href: '/contatti',
			cta: 'Richiedi un intervento'
		},
		{
			n: '03',
			t: 'Ricambi e assistenza',
			d: 'Disponibilità di ricambi e supporto post-vendita diretto, per tenere le tue macchine sempre operative e ridurre i fermi di lavoro.',
			points: ['Ricambi disponibili', 'Assistenza post-vendita', 'Supporto diretto e personalizzato'],
			href: '/contatti',
			cta: 'Contattaci'
		}
	];

	const distintivi = [
		{ t: 'Test pre-acquisto', d: 'In casi selezionati, puoi provare il prodotto prima dell’acquisto finale.' },
		{ t: 'Personalizzazione', d: 'Adattiamo gli attrezzi alle tue esigenze specifiche di terreno e coltura.' },
		{ t: 'Conformità CE', d: 'Le nostre macchine rispettano le normative di sicurezza vigenti.' }
	];
</script>

<svelte:head>
	<title>Servizi — L'Agrimeccanica</title>
	<meta
		name="description"
		content="I servizi de L'Agrimeccanica: produzione di attrezzature agricole, riparazione e manutenzione di mezzi agricoli e movimento terra, ricambi e assistenza."
	/>
</svelte:head>

<!-- Hero -->
<section class="border-b border-border">
	<div class="mx-auto max-w-7xl px-4 py-16">
		<div class="h-1 w-12 bg-accent"></div>
		<h1 class="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-ink uppercase sm:text-5xl">
			Un partner completo
		</h1>
		<p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
			Dalla produzione alla riparazione: due competenze in un'unica officina. Ti seguiamo prima,
			durante e dopo l'acquisto.
		</p>
	</div>
</section>

<!-- Servizi principali -->
<section class="mx-auto max-w-7xl px-4 py-16">
	<div class="space-y-px overflow-hidden rounded-lg border border-border bg-border">
		{#each main as s (s.n)}
			<div class="grid gap-6 bg-surface p-8 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10">
				<span class="font-mono text-2xl font-bold text-accent">{s.n}</span>
				<div>
					<h2 class="text-2xl font-bold text-ink">{s.t}</h2>
					<p class="mt-3 max-w-2xl leading-relaxed text-muted">{s.d}</p>
					<ul class="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
						{#each s.points as p (p)}
							<li class="flex items-center gap-2">
								<span class="text-primary">▪</span>
								{p}
							</li>
						{/each}
					</ul>
				</div>
				<a
					href={s.href}
					class="inline-flex shrink-0 items-center gap-1.5 font-mono text-sm text-primary transition-colors hover:text-primary-strong"
				>
					{s.cta} →
				</a>
			</div>
		{/each}
	</div>
</section>

<!-- Servizi distintivi -->
<section class="border-t border-border bg-surface/40">
	<div class="mx-auto max-w-7xl px-4 py-16">
		<h2 class="text-2xl font-bold tracking-tight text-ink uppercase sm:text-3xl">
			Cosa ci distingue
		</h2>
		<div class="mt-10 grid gap-5 md:grid-cols-3">
			{#each distintivi as d (d.t)}
				<div class="rounded-lg border border-border bg-surface p-7">
					<h3 class="text-lg font-semibold text-primary">{d.t}</h3>
					<p class="mt-3 leading-relaxed text-muted">{d.d}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<QuoteCTA
	title="Parliamo del tuo lavoro"
	subtitle="Produzione, riparazione o ricambi: raccontaci cosa ti serve e troviamo la soluzione."
/>
