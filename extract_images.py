#!/usr/bin/env python3
"""
Script per estrarre tutte le immagini da ogni pagina HTML,
escludendo quelle di header e footer.
"""

import os
import re
from pathlib import Path
from collections import defaultdict

# Directory contenente i file HTML
HTML_DIR = "/home/vincenzotinelli/L-Agrimeccanica/industo-package/industo"

def extract_images_from_section(html_content, start_marker, end_marker):
    """Estrae immagini da una specifica sezione HTML"""
    images = set()

    # Trova la sezione
    start = html_content.find(start_marker)
    end = html_content.find(end_marker)

    if start == -1 or end == -1:
        return images

    section = html_content[start:end]

    # Cerca tag <img src="...">
    img_tags = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', section)
    images.update(img_tags)

    # Cerca background-image: url(...)
    bg_images = re.findall(r'background-image:\s*url\(["\']?([^"\')\s]+)["\']?\)', section)
    images.update(bg_images)

    # Cerca style="background-image: url(...)"
    style_bg = re.findall(r'style=["\'][^"\']*background-image:\s*url\(["\']?([^"\')\s]+)["\']?\)', section)
    images.update(style_bg)

    return images

def extract_all_images_from_html(html_path):
    """Estrae tutte le immagini da un file HTML, categorizzate per sezione"""
    with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
        html_content = f.read()

    result = {
        'header': set(),
        'footer': set(),
        'content': set(),
        'all': set()
    }

    # Estrai tutte le immagini
    all_img = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html_content)
    all_bg = re.findall(r'background-image:\s*url\(["\']?([^"\')\s]+)["\']?\)', html_content)

    result['all'] = set(all_img + all_bg)

    # Estrai immagini da header
    result['header'] = extract_images_from_section(
        html_content,
        '<header class="main-header">',
        '<!-- End Main Header -->'
    )

    # Estrai immagini da footer
    result['footer'] = extract_images_from_section(
        html_content,
        '<footer class="main-footer"',
        '<!-- End Main Footer -->'
    )

    # Le immagini del contenuto sono quelle non in header/footer
    result['content'] = result['all'] - result['header'] - result['footer']

    return result

def main():
    """Funzione principale"""
    pages_data = {}

    # Analizza tutti i file HTML
    html_files = sorted(Path(HTML_DIR).glob("*.html"))

    for html_file in html_files:
        filename = html_file.name
        print(f"Analizzando: {filename}")

        images = extract_all_images_from_html(str(html_file))
        pages_data[filename] = images

    # Genera il report
    report_path = "/home/vincenzotinelli/L-Agrimeccanica/MAPPATURA_IMMAGINI.md"

    with open(report_path, 'w', encoding='utf-8') as f:
        f.write("# MAPPATURA IMMAGINI PROGETTO L'AGRIMECCANICA\n\n")
        f.write("Documento generato automaticamente per tracciare tutte le immagini utilizzate in ogni pagina.\n\n")
        f.write("---\n\n")

        # Sezione riepilogo
        f.write("## RIEPILOGO PAGINE\n\n")
        f.write(f"**Totale pagine analizzate:** {len(pages_data)}\n\n")

        for filename in sorted(pages_data.keys()):
            content_count = len(pages_data[filename]['content'])
            f.write(f"- **{filename}**: {content_count} immagini\n")

        f.write("\n---\n\n")

        # Immagini comuni (header/footer)
        f.write("## IMMAGINI COMUNI (Header e Footer)\n\n")
        f.write("Queste immagini sono presenti in tutte le pagine e sono state escluse dalle liste seguenti.\n\n")

        # Prendi una pagina qualsiasi per mostrare header/footer
        sample_page = list(pages_data.values())[0]

        f.write("### Header\n\n")
        for img in sorted(sample_page['header']):
            f.write(f"- `{img}`\n")

        f.write("\n### Footer\n\n")
        for img in sorted(sample_page['footer']):
            f.write(f"- `{img}`\n")

        f.write("\n---\n\n")

        # Dettaglio per ogni pagina
        f.write("## DETTAGLIO IMMAGINI PER PAGINA\n\n")

        for filename in sorted(pages_data.keys()):
            data = pages_data[filename]
            content_images = sorted(data['content'])

            f.write(f"### {filename}\n\n")

            if not content_images:
                f.write("*Nessuna immagine specifica (solo header/footer)*\n\n")
            else:
                f.write(f"**Numero immagini:** {len(content_images)}\n\n")

                for img in content_images:
                    # Determina se è un placeholder o meno
                    placeholder_note = ""
                    if any(x in img.lower() for x in ['placeholder', 'temp', 'example', 'demo']):
                        placeholder_note = " *(PLACEHOLDER)*"

                    f.write(f"- `{img}`{placeholder_note}\n")

            f.write("\n")

        f.write("---\n\n")
        f.write("*Fine documento*\n")

    print(f"\n✓ Mappatura completata!")
    print(f"✓ Report salvato in: {report_path}")
    print(f"✓ Totale pagine analizzate: {len(pages_data)}")

if __name__ == "__main__":
    main()
