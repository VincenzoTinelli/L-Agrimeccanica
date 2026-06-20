<script lang="ts">
	import { site, mainNav, productCategories } from '$lib/config/site';

	const year = 2026; // sito statico: anno fisso, aggiornato a build
</script>

<footer class="mt-24 border-t border-border bg-surface text-muted">
	<div class="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
		<!-- Azienda -->
		<div>
			<p class="text-lg font-extrabold tracking-tight text-ink uppercase">L'Agrimeccanica</p>
			<p class="mt-1 font-mono text-xs text-primary">est. 1995 · Murge</p>
			<p class="mt-4 max-w-xs text-sm leading-relaxed">{site.tagline}</p>
		</div>

		<!-- Navigazione -->
		<nav aria-label="Navigazione footer">
			<p class="font-mono text-xs tracking-widest text-muted uppercase">Naviga</p>
			<ul class="mt-4 space-y-2.5 text-sm">
				{#each mainNav as item (item.href)}
					<li>
						<a href={item.href} class="transition-colors hover:text-primary">{item.label}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Prodotti -->
		<nav aria-label="Categorie prodotti">
			<p class="font-mono text-xs tracking-widest text-muted uppercase">Prodotti</p>
			<ul class="mt-4 space-y-2.5 text-sm">
				{#each productCategories as cat (cat.slug)}
					<li>
						<a href="/prodotti/{cat.slug}" class="transition-colors hover:text-primary">
							{cat.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Contatti -->
		<div>
			<p class="font-mono text-xs tracking-widest text-muted uppercase">Contatti</p>
			<address class="mt-4 space-y-2.5 text-sm not-italic">
				<p class="text-ink">{site.contacts.address.street}<br />{site.contacts.address.city}</p>
				<p>
					<a href={site.contacts.phoneHref} class="font-mono text-ink hover:text-primary">
						{site.contacts.phoneDisplay}
					</a>
				</p>
				<p>
					<a href="mailto:{site.contacts.email}" class="break-all hover:text-primary">
						{site.contacts.email}
					</a>
				</p>
			</address>
		</div>
	</div>

	<div class="border-t border-border">
		<p class="mx-auto max-w-7xl px-4 py-5 text-xs text-muted">
			© {year}
			{site.name} · P.IVA da inserire
		</p>
	</div>
</footer>
