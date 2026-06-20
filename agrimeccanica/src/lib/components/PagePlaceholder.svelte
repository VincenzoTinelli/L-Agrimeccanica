<script lang="ts">
	let {
		title,
		subtitle = '',
		phase = ''
	}: { title: string; subtitle?: string; phase?: string } = $props();
</script>

<section class="mx-auto max-w-7xl px-4 py-20">
	<div class="h-1 w-12 bg-accent"></div>
	<h1 class="mt-6 text-4xl font-extrabold tracking-tight text-ink uppercase sm:text-5xl">
		{title}
	</h1>
	{#if subtitle}
		<p class="mt-5 max-w-2xl text-lg text-muted">{subtitle}</p>
	{/if}
	{#if phase}
		<p
			class="mt-8 inline-block rounded border border-border bg-surface px-4 py-2.5 font-mono text-xs text-muted"
		>
			🚧 In costruzione — {phase}
		</p>
	{/if}
</section>
