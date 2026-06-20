<script lang="ts">
	import { blogImage } from '$lib/images';

	interface Props {
		slug: string;
		alt: string;
		sizes?: string;
		class?: string;
		priority?: boolean;
	}

	let {
		slug,
		alt,
		sizes = '(min-width: 768px) 33vw, 100vw',
		class: className = '',
		priority = false
	}: Props = $props();

	const img = $derived(blogImage(slug));
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
{/if}
