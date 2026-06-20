<script lang="ts">
	import QuoteCTA from '$lib/components/QuoteCTA.svelte';

	const faqs = [
		{
			q: 'Posso provare il prodotto prima di acquistarlo?',
			a: 'In casi selezionati sì: per alcuni prodotti offriamo la possibilità di un test pre-acquisto. Contattaci per verificare la disponibilità sul modello che ti interessa.'
		},
		{
			q: 'Le vostre macchine sono certificate?',
			a: 'Sì. Le nostre attrezzature rispettano le normative di sicurezza vigenti e molti modelli riportano la marcatura CE. Per i prodotti speciali sono previste certificazioni aggiuntive.'
		},
		{
			q: 'Posso richiedere una personalizzazione?',
			a: 'Certo. Costruiamo in proprio, quindi possiamo adattare diversi attrezzi alle tue esigenze specifiche di terreno, coltura e trattore.'
		},
		{
			q: 'Quali sono i tempi di consegna?',
			a: 'Dipendono dal modello e dal periodo. Trattandosi di produzione propria, definiamo i tempi insieme al preventivo: contattaci per una stima.'
		},
		{
			q: 'Riparate anche mezzi non costruiti da voi?',
			a: 'Sì. Ci occupiamo di manutenzione ordinaria e straordinaria di mezzi agricoli e movimento terra di diverse tipologie e marche.'
		},
		{
			q: 'Avete ricambi disponibili?',
			a: 'Sì, gestiamo un magazzino ricambi e offriamo assistenza post-vendita diretta per ridurre i fermi macchina.'
		},
		{
			q: 'Come funziona il prezzo?',
			a: 'I prezzi sono su richiesta: ogni preventivo è su misura in base al modello, alla configurazione e alle eventuali personalizzazioni.'
		},
		{
			q: 'Dove vi trovate?',
			a: 'La nostra officina è in Contrada Figazzano, Via dei Trulli 14, a Cisternino (BR), nel cuore delle Murge. Vieni a trovarci o chiamaci.'
		}
	];
</script>

<svelte:head>
	<title>Domande frequenti — L'Agrimeccanica</title>
	<meta
		name="description"
		content="Risposte alle domande più frequenti su attrezzature, riparazioni, ricambi, tempi di consegna e preventivi de L'Agrimeccanica di Tinelli Giuseppe."
	/>
</svelte:head>

<!-- Hero -->
<section class="border-b border-border">
	<div class="mx-auto max-w-7xl px-4 py-16">
		<div class="h-1 w-12 bg-accent"></div>
		<h1 class="mt-6 text-4xl font-extrabold tracking-tight text-ink uppercase sm:text-5xl">
			Domande frequenti
		</h1>
		<p class="mt-5 max-w-2xl text-lg text-muted">
			Le risposte alle domande che ci fanno più spesso. Non trovi quello che cerchi? Scrivici.
		</p>
	</div>
</section>

<!-- Accordion -->
<section class="mx-auto max-w-3xl px-4 py-14">
	{#each faqs as faq (faq.q)}
		<details class="group border-b border-border">
			<summary
				class="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden"
			>
				{faq.q}
				<span
					class="font-mono text-xl text-primary transition-transform duration-200 group-open:rotate-45"
				>
					+
				</span>
			</summary>
			<p class="max-w-2xl pb-6 leading-relaxed text-muted">{faq.a}</p>
		</details>
	{/each}
</section>

<QuoteCTA
	title="Hai un'altra domanda?"
	subtitle="Chiamaci o scrivici: ti rispondiamo direttamente, senza intermediari."
/>
