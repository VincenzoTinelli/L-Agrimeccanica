<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/config/site';

	let form = $state({ nome: '', email: '', telefono: '', prodotto: '', messaggio: '' });

	// Precompila il prodotto dal link "Richiedi preventivo" delle card (?prodotto=GT-400).
	$effect(() => {
		const p = page.url.searchParams.get('prodotto');
		if (p && !form.prodotto) form.prodotto = p;
	});

	const inputClass =
		'mt-1.5 w-full rounded-md border-border bg-bg text-ink placeholder:text-muted focus:border-primary focus:ring-primary';

	// Indirizzo completo per la mappa (geocodificato da Google, niente API key).
	const mapQuery = [
		site.contacts.address.street,
		site.contacts.address.city,
		site.contacts.address.region
	].join(', ');
	const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=13&output=embed`;
	const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		const subject = `Richiesta preventivo${form.prodotto ? ` — ${form.prodotto}` : ''}`;
		const body = [
			`Nome: ${form.nome}`,
			`Email: ${form.email}`,
			`Telefono: ${form.telefono}`,
			`Prodotto: ${form.prodotto || '—'}`,
			'',
			form.messaggio
		].join('\n');
		window.location.href = `mailto:${site.contacts.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	}
</script>

<svelte:head>
	<title>Contatti — L'Agrimeccanica</title>
	<meta
		name="description"
		content="Contatta L'Agrimeccanica di Tinelli Giuseppe a Cisternino (BR): richiedi un preventivo gratuito per attrezzature agricole e riparazioni."
	/>
</svelte:head>

<!-- Hero -->
<section class="border-b border-border">
	<div class="mx-auto max-w-7xl px-4 py-16">
		<div class="h-1 w-12 bg-accent"></div>
		<h1 class="mt-6 text-4xl font-extrabold tracking-tight text-ink uppercase sm:text-5xl">
			Contatti
		</h1>
		<p class="mt-5 max-w-2xl text-lg text-muted">
			Scrivici o chiamaci per un preventivo gratuito. Ti rispondiamo con una proposta su misura per la
			tua azienda.
		</p>
	</div>
</section>

<section class="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[1.2fr_0.8fr]">
	<!-- Form -->
	<form onsubmit={handleSubmit} class="space-y-5">
		<div class="grid gap-5 sm:grid-cols-2">
			<label class="block text-sm font-medium text-ink">
				Nome e cognome
				<input bind:value={form.nome} required class={inputClass} type="text" autocomplete="name" />
			</label>
			<label class="block text-sm font-medium text-ink">
				Telefono
				<input bind:value={form.telefono} class={inputClass} type="tel" autocomplete="tel" />
			</label>
		</div>
		<label class="block text-sm font-medium text-ink">
			Email
			<input bind:value={form.email} required class={inputClass} type="email" autocomplete="email" />
		</label>
		<label class="block text-sm font-medium text-ink">
			Prodotto di interesse <span class="text-muted">(opzionale)</span>
			<input bind:value={form.prodotto} class={inputClass} type="text" placeholder="es. GT-400" />
		</label>
		<label class="block text-sm font-medium text-ink">
			Messaggio
			<textarea
				bind:value={form.messaggio}
				required
				rows="5"
				class={inputClass}
				placeholder="Raccontaci di cosa hai bisogno…"
			></textarea>
		</label>

		<button
			type="submit"
			class="inline-flex min-h-13 items-center justify-center rounded bg-primary px-7 py-3.5 font-semibold tracking-wide text-on-brand transition-colors hover:bg-primary-strong"
		>
			Invia richiesta
		</button>
		<p class="font-mono text-xs text-muted">
			Si aprirà il tuo programma di posta con il messaggio già pronto. Invio diretto in arrivo
			(Fase 6).
		</p>
	</form>

	<!-- Info -->
	<div class="space-y-px overflow-hidden rounded-lg border border-border bg-border">
		<div class="bg-surface p-6">
			<p class="font-mono text-xs tracking-widest text-muted uppercase">Officina</p>
			<p class="mt-3 text-ink">
				{site.contacts.address.street}<br />{site.contacts.address.city}
			</p>
		</div>
		<div class="bg-surface p-6">
			<p class="font-mono text-xs tracking-widest text-muted uppercase">Telefono</p>
			<a
				href={site.contacts.phoneHref}
				class="mt-3 block font-mono text-lg text-primary transition-colors hover:text-primary-strong"
			>
				{site.contacts.phoneDisplay}
			</a>
		</div>
		<div class="bg-surface p-6">
			<p class="font-mono text-xs tracking-widest text-muted uppercase">Email</p>
			<a
				href="mailto:{site.contacts.email}"
				class="mt-3 block break-all text-ink transition-colors hover:text-primary"
			>
				{site.contacts.email}
			</a>
		</div>
		<div class="bg-surface">
			<iframe
				title="Mappa — {site.contacts.address.city}"
				src={mapEmbed}
				class="block aspect-video w-full border-0 grayscale-[0.3]"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
			<a
				href={mapLink}
				target="_blank"
				rel="noopener noreferrer"
				class="block bg-surface px-6 py-4 font-mono text-xs text-primary transition-colors hover:text-primary-strong"
			>
				Apri in Google Maps →
			</a>
		</div>
	</div>
</section>
