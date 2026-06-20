<script lang="ts">
	import type { Product } from '$lib/data/products';
	import { productImage } from '$lib/images';

	interface Props {
		product: Product;
		/** Valore dell'attributo `sizes` per il srcset responsive. */
		sizes?: string;
		/** Classi extra per l'immagine / il placeholder. */
		class?: string;
		/** Caricamento eager per le immagini above-the-fold. */
		priority?: boolean;
	}

	let {
		product,
		sizes = '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw',
		class: className = '',
		priority = false
	}: Props = $props();

	const img = $derived(productImage(product.slug));
	const alt = $derived(`${product.code} — ${product.name}`);
</script>

{#if img}
	<enhanced:img
		src={img}
		{alt}
		{sizes}
		loading={priority ? 'eager' : 'lazy'}
		fetchpriority={priority ? 'high' : 'auto'}
		class="h-full w-full object-cover {className}"
	/>
{:else}
	<!-- Placeholder tecnico "blueprint": il codice prodotto su sfondo acciaio. -->
	<div class="flex h-full w-full items-center justify-center bg-bg {className}">
		<span class="font-mono text-3xl font-bold tracking-widest text-surface-2 select-none">
			{product.code}
		</span>
	</div>
{/if}
