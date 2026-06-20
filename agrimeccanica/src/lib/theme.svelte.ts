/**
 * Stato del tema colore (anteprima palette).
 *
 * Il tema attivo è un attributo `data-theme` su <html>. I componenti non sanno
 * nulla del tema: leggono i token (`--color-primary`, …) che cambiano valore
 * in `layout.css` a seconda di `data-theme`. Cambiare tema = cambiare i token.
 *
 * La scelta è persistita in localStorage e applicata prima del paint da uno
 * script inline in `app.html` (niente flash al caricamento).
 */
import { browser } from '$app/environment';

export const THEMES = [
	{ id: 'arancio', label: 'Arancio', hint: 'palette scelta' },
	{ id: 'verde', label: 'Verde', hint: 'alternativa' },
	{ id: 'rosso', label: 'Rosso', hint: 'colore del logo' }
] as const;

export type ThemeId = (typeof THEMES)[number]['id'];

const STORAGE_KEY = 'agri-theme';
const DEFAULT: ThemeId = 'arancio';

function isThemeId(value: string | null | undefined): value is ThemeId {
	return !!value && THEMES.some((t) => t.id === value);
}

class ThemeStore {
	id = $state<ThemeId>(DEFAULT);

	constructor() {
		if (!browser) return;
		const saved = localStorage.getItem(STORAGE_KEY);
		const attr = document.documentElement.dataset.theme;
		this.id = isThemeId(saved) ? saved : isThemeId(attr) ? attr : DEFAULT;
		document.documentElement.dataset.theme = this.id;
	}

	set(id: ThemeId) {
		this.id = id;
		if (!browser) return;
		localStorage.setItem(STORAGE_KEY, id);
		document.documentElement.dataset.theme = id;
	}
}

export const theme = new ThemeStore();
