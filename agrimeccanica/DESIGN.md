# Design

Sistema visivo de L'Agrimeccanica. Direzione: **Acciaio & Campo** — industriale-tecnico, base scura, il macchinario è il protagonista. Mood guida: *officina agromeccanica sotto luce da capannone — acciaio grezzo, verde macchina e nastro arancio di sicurezza.*

## Color

Strategia: **committed scuro**. Superficie "acciaio" (grafite cool, neutra), il colore vive nei due brand color con ruolo da segnaletica — mai decorativo. Tutto in OKLCH.

| Ruolo | Token | OKLCH | Uso |
|---|---|---|---|
| Background | `--color-bg` | `oklch(0.19 0.006 235)` | sfondo pagina, acciaio scuro |
| Surface | `--color-surface` | `oklch(0.235 0.008 235)` | card, sezioni rialzate |
| Surface 2 | `--color-surface-2` | `oklch(0.285 0.010 235)` | hover/elementi sovrapposti |
| Border | `--color-border` | `oklch(0.34 0.012 235)` | hairline, separatori |
| Ink | `--color-ink` | `oklch(0.97 0.003 235)` | testo principale (≈17:1) |
| Muted | `--color-muted` | `oklch(0.74 0.012 235)` | testo secondario (≈7:1) |
| Primary | `--color-primary` | `oklch(0.72 0.16 150)` | verde-macchina: CTA, qualità, stati attivi |
| Primary strong | `--color-primary-strong` | `oklch(0.66 0.17 150)` | hover/pressed del primario |
| Accent | `--color-accent` | `oklch(0.72 0.16 65)` | arancio sicurezza: enfasi puntuale, attenzione |
| Ink on brand | `--color-on-brand` | `oklch(0.17 0.01 235)` | testo scuro su verde/arancio (≈6.5:1) |

Regole: i bottoni primari sono verde pieno con testo grafite scuro (look "machined"). L'arancio è raro — segnala azione/attenzione, non riempie. Nessun gradient, nessun glow, nessun glass.

## Typography

Asse di contrasto per peso/uso, non per accostamento di famiglie simili.

- **Display/UI**: `Archivo Variable` (grotesque industriale). Heading pesanti (700–800), spesso maiuscolo con tracking stretto controllato (≥ -0.02em) per il tono "targhetta metallica".
- **Mono tecnico**: `Space Mono` — codici prodotto (GT-400), misure e specifiche. Dà il sapore "scheda tecnica/blueprint". Usato con parsimonia.
- Corpo testo 16–18px, line-length 65–75ch, `text-wrap: balance` su h1–h3, `pretty` sulle prose.

## Components (base)
- **Button**: varianti `primary` (verde, testo scuro), `outline` (bordo, testo ink), `ghost`. Raggio contenuto (4–6px, niente pillole morbide), stato focus visibile, target ≥44px.
- **Container**: max-width 80rem, padding laterale responsive.
- **Card/Section**: superficie `surface`, bordo hairline, raggio piccolo. Mai card annidate. Le card si usano solo dove sono la vera affordance (prodotti), non come riempitivo.

## Layout
- Griglia rigorosa, allineamenti netti, ritmo di spaziatura variabile (non monotono).
- Griglie prodotto responsive: `repeat(auto-fit, minmax(280px, 1fr))`.
- Z-index semantico (dropdown → sticky → modal → toast).

## Motion
Sobria e intenzionale (anti-flashy esplicito). Hover/focus con `ease-out` esponenziale; eventuali entrate in scena come stagger leggero su liste, sempre su contenuto già visibile. `@media (prefers-reduced-motion: reduce)` obbligatorio: crossfade o istantaneo.
