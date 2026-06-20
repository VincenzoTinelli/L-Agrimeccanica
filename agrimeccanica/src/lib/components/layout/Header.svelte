<script lang="ts">
	import { page } from '$app/state';
	import { site, mainNav } from '$lib/config/site';
	import Button from '$lib/components/ui/Button.svelte';

	let open = $state(false);

	function isActive(href: string): boolean {
		const path = page.url.pathname;
		return href === '/' ? path === '/' : path === href || path.startsWith(href + '/');
	}
</script>

<header class="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
	<nav class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5">
		<!-- Wordmark -->
		<a href="/" class="group flex items-baseline gap-2" onclick={() => (open = false)}>
			<span class="text-lg font-extrabold tracking-tight text-ink uppercase">
				L'Agrimeccanica
			</span>
			<span class="hidden font-mono text-[0.65rem] text-primary sm:inline">est. 1995</span>
		</a>

		<!-- Desktop nav -->
		<ul class="hidden items-center gap-0.5 lg:flex">
			{#each mainNav as item (item.href)}
				<li>
					<a
						href={item.href}
						aria-current={isActive(item.href) ? 'page' : undefined}
						class="relative px-3 py-2 text-sm font-medium transition-colors
							{isActive(item.href) ? 'text-primary' : 'text-muted hover:text-ink'}"
					>
						{item.label}
						{#if isActive(item.href)}
							<span class="absolute inset-x-3 -bottom-px h-0.5 bg-primary"></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<div class="hidden lg:block">
			<Button href="/contatti" size="md">Preventivo</Button>
		</div>

		<!-- Mobile toggle -->
		<button
			class="inline-flex min-h-11 min-w-11 items-center justify-center rounded text-ink lg:hidden"
			aria-label={open ? 'Chiudi menu' : 'Apri menu'}
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				{#if open}
					<path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
				{:else}
					<path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
				{/if}
			</svg>
		</button>
	</nav>

	<!-- Mobile menu -->
	{#if open}
		<div class="border-t border-border bg-bg lg:hidden">
			<ul class="mx-auto flex max-w-7xl flex-col gap-0.5 px-4 py-3">
				{#each mainNav as item (item.href)}
					<li>
						<a
							href={item.href}
							onclick={() => (open = false)}
							aria-current={isActive(item.href) ? 'page' : undefined}
							class="flex min-h-11 items-center rounded px-3 text-base font-medium
								{isActive(item.href)
								? 'bg-surface text-primary'
								: 'text-muted hover:bg-surface hover:text-ink'}"
						>
							{item.label}
						</a>
					</li>
				{/each}
				<li class="pt-2">
					<Button href="/contatti" size="lg" class="w-full" onclick={() => (open = false)}>
						Richiedi preventivo
					</Button>
				</li>
			</ul>
		</div>
	{/if}
</header>
