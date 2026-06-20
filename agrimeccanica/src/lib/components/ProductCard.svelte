<script lang="ts">
	import type { Product } from '$lib/data/products';
	import { productImage } from '$lib/images';
	import ProductImage from '$lib/components/ProductImage.svelte';

	let { product }: { product: Product } = $props();

	// Nome senza il prefisso-codice (il codice è mostrato a parte).
	const displayName = $derived(product.name.replace(product.code, '').trim());
	const hasImage = $derived(!!productImage(product.slug));
</script>

<article
	class="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-muted"
>
	<div class="relative aspect-[4/3] overflow-hidden border-b border-border bg-bg">
		<ProductImage
			{product}
			class="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
		/>
		{#if !hasImage}
			<span class="absolute top-3 left-3 font-mono text-[0.65rem] text-muted">○ foto in arrivo</span>
		{/if}
		{#if product.featured}
			<span
				class="absolute top-3 right-3 rounded bg-accent px-1.5 py-0.5 font-mono text-[0.6rem] font-bold tracking-wider text-on-brand"
			>
				PUNTA
			</span>
		{/if}
	</div>

	<div class="flex flex-1 flex-col p-5">
		<p class="font-mono text-sm font-bold tracking-wider text-ink">{product.code}</p>
		<h3 class="mt-1 text-base font-semibold text-ink">{displayName}</h3>
		<p class="mt-2 text-sm leading-relaxed text-muted">{product.short}</p>

		<dl class="mt-4 space-y-1.5 border-t border-border pt-4 font-mono text-xs">
			{#each product.specs.slice(0, 3) as [k, v] (k)}
				<div class="flex justify-between gap-3">
					<dt class="text-muted">{k}</dt>
					<dd class="text-right text-ink">{v}</dd>
				</div>
			{/each}
		</dl>

		<a
			href="/contatti?prodotto={product.code}"
			class="mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-primary transition-colors hover:text-primary-strong"
		>
			Richiedi preventivo
			<span class="transition-transform group-hover:translate-x-0.5">→</span>
		</a>
	</div>
</article>
