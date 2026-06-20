<script lang="ts">
	import { theme, THEMES } from '$lib/theme.svelte';

	// Pasticca colore di ogni tema = il suo primario, per riconoscerlo a colpo d'occhio.
	const swatch: Record<string, string> = {
		arancio: 'oklch(0.7 0.17 56)',
		verde: 'oklch(0.72 0.16 150)',
		rosso: 'oklch(0.585 0.205 27)'
	};
</script>

<div class="theme-switcher" role="group" aria-label="Anteprima tema colore">
	<span class="ts-label">Tema</span>
	<div class="ts-options">
		{#each THEMES as t (t.id)}
			<button
				type="button"
				class="ts-dot"
				class:is-active={theme.id === t.id}
				style="--sw: {swatch[t.id]}"
				aria-pressed={theme.id === t.id}
				title="{t.label} — {t.hint}"
				aria-label="Tema {t.label}: {t.hint}"
				onclick={() => theme.set(t.id)}
			></button>
		{/each}
	</div>
</div>

<style>
	.theme-switcher {
		position: fixed;
		right: 1rem;
		bottom: 1rem;
		z-index: 45;
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.55rem 0.7rem;
		border: 1px solid var(--color-border);
		border-radius: 0.6rem;
		background: color-mix(in oklch, var(--color-surface) 90%, transparent);
		backdrop-filter: blur(10px);
		box-shadow: 0 10px 28px oklch(0 0 0 / 0.45);
	}
	.ts-label {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-muted);
	}
	.ts-options {
		display: flex;
		gap: 0.4rem;
	}
	.ts-dot {
		width: 1.4rem;
		height: 1.4rem;
		border-radius: 9999px;
		background: var(--sw);
		border: 2px solid transparent;
		cursor: pointer;
		transition:
			transform 0.15s var(--ease-out-quint),
			border-color 0.15s ease;
	}
	.ts-dot:hover {
		transform: scale(1.12);
	}
	.ts-dot.is-active {
		border-color: var(--color-ink);
	}
	.ts-dot:focus-visible {
		outline: 2px solid var(--color-ink);
		outline-offset: 2px;
	}
</style>
