<script lang="ts">
	import { site } from '$lib/config/site';
	import Button from '$lib/components/ui/Button.svelte';

	let {
		title = 'Hai bisogno di un preventivo?',
		subtitle = 'Raccontaci cosa ti serve: ti rispondiamo con una proposta su misura.'
	}: { title?: string; subtitle?: string } = $props();
</script>

<section class="border-y border-border bg-surface">
	<div
		class="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between"
	>
		<div>
			<h2 class="text-2xl font-bold tracking-tight text-ink uppercase sm:text-3xl">{title}</h2>
			<p class="mt-2 max-w-xl text-muted">{subtitle}</p>
		</div>
		<div class="flex flex-wrap items-center gap-x-5 gap-y-3">
			<Button href="/contatti" size="lg">Richiedi preventivo</Button>
			<a
				href={site.contacts.phoneHref}
				class="font-mono text-sm text-muted transition-colors hover:text-primary"
			>
				o chiama {site.contacts.phoneDisplay}
			</a>
		</div>
	</div>
</section>
