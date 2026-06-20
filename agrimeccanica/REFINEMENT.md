# Rifinitura home — backlog (Fase 7)

Da audit multi-agente (giu 2026). Direzione: **restyle**, palette **arancio**, l'attrezzo è il protagonista, leva sul **valore**. Vincoli in `DESIGN.md`. Implementazione a piccoli passi: 1 sezione → build + screenshot → ok utente.

Legenda effort: **S** piccolo · **M** medio · **L** grande.

## 1. "Cosa produciamo" — 🔴 RIFAI · priorità alta
La mossa più importante (recupera l'anima Industo). Oggi è una lista piatta di 7 link.
- **[M] Catalogo a TAB**: colonna categorie (sx) + **foto reale grande** (dx) con overlay (nome · codice · "Scopri di più →"). Foto via `productImage(featuredByCategory(slug))`. L'attrezzo torna protagonista.
- **[S]** Ogni categoria: `tagline` (da `categories.ts`) + **conteggio modelli** (`productsByCategory().length`). Attiva in arancio.
- **[M]** Tab accessibili (runes, `role=tablist`, tastiera), ogni voce resta un `<a>` (funziona senza JS); crossfade foto ~200ms + reduced-motion.
- **[S]** Responsive: chip orizzontali su mobile, foto protagonista (16/9).
- **[S] FIX dati**: `GTM-49` ha `hasPhoto:false` ma l'asset `gtm-49.png` esiste → mettere `true`.

## 2. "Prodotti di punta" — 🟡 MIGLIORA · alta
- **[M]** Layout **asimmetrico**: 1 protagonista grande + 2-3 card compatte (no 4 cloni stretti).
- **[S]** **Trust-strip verde** ("Testato prima della consegna", "Ricambi disponibili"); ridurre il badge "PUNTA" ridondante.
- **[S]** Sfondo `--color-primary-soft` per distinguere la sezione clou; copy intro orientato al valore; link "Tutti i prodotti →"; slice 4→6.

## 3. "Valori" — 🟡 MIGLIORA · alta
- **[S]** Titolo sezione + **nomi evocativi** (Artigianalità / Radici locali / Assistenza vera) con copy concreto (es. "Saldata e collaudata a mano, pezzo per pezzo").
- **[M]** **Icona lineare** on-brand per valore (SVG inline mono-stroke, arancio).
- **[M]** Differenziare il layout da "Cosa produciamo" (divisori verticali / più aria, indice 01·02·03 mono, stagger sobrio).

## 4. "Servizi" — 🔴 RIFAI · alta
- **[M]** Righe "**scheda d'officina**" (num mono + titolo + bullet, come la pagina `/servizi`) per non clonare Valori.
- **[S]** Copy concreto + **CTA per riga** (Riparazione → telefono `site.contacts`; Produzione → catalogo).
- **[M]** Foto **officina reale** (riusare `background-repair.png` dal legacy).

## 5. CTA preventivo — 🟡 MIGLIORA · alta
- **[M]** Foto prodotto (GT-400) ritagliata a destra.
- **[S]** Telefono come **Button secondario** reale; copy conversazionale; sfondo `--color-primary-soft` + hairline arancio.

## 6. "Dal blog" — 🟡 MIGLIORA · media
- **[S]** Riga intro; allineare hover a ProductCard; `line-clamp` + CTA `mt-auto`; CTA blog più leggero (distinto da quello commerciale).

## 7. Sezioni da AGGIUNGERE · alta
- **[M] Testimonianze** (2-3 quote reali, card, stelle **verdi**, virgolette arancio) — ⚠️ servono testimonianze vere/autorizzate.
- **[S] Strip 3 pilastri** sotto la hero (Produzione / Riparazione / Ricambi, icone linea) — ponte hero→contenuto.
- **[M] Filtro a chip** per famiglia su "Prodotti di punta" (runes).
- **[M] Newsletter** (banda sottile) — ⚠️ serve provider form (Fase 6).

## Contenuti / decisioni da te
- **Testimonianze reali** (per la sezione testimonianze).
- OK sulle **riscritture copy** (valori/servizi/CTA) — o le scrivi tu.
- **Provider newsletter/form** (si lega alla Fase 6).
