<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'outline' | 'ghost';
	type Size = 'md' | 'lg';

	let {
		href = undefined,
		variant = 'primary',
		size = 'md',
		class: klass = '',
		children,
		...rest
	}: {
		href?: string;
		variant?: Variant;
		size?: Size;
		class?: string;
		children: Snippet;
		[key: string]: unknown;
	} = $props();

	const base =
		'inline-flex items-center justify-center gap-2 rounded font-semibold tracking-wide transition-colors duration-200';

	const sizes: Record<Size, string> = {
		md: 'min-h-11 px-5 py-2.5 text-sm',
		lg: 'min-h-13 px-7 py-3.5 text-base'
	};

	const variants: Record<Variant, string> = {
		primary: 'bg-primary text-on-brand hover:bg-primary-strong',
		outline: 'border border-border text-ink hover:border-muted hover:bg-surface-2',
		ghost: 'text-muted hover:bg-surface hover:text-ink'
	};

	const cls = $derived(`${base} ${sizes[size]} ${variants[variant]} ${klass}`);
</script>

{#if href}
	<a {href} class={cls} {...rest}>{@render children()}</a>
{:else}
	<button class={cls} {...rest}>{@render children()}</button>
{/if}
