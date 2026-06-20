/**
 * Catalogo prodotti L'Agrimeccanica — sorgente unica.
 * Trascritto da CATALOGO_PRODOTTI_COMPLETO.md (la fonte aziendale).
 *
 * Note di scope:
 * - 28 prodotti reali su 7 categorie. Esclusi i 2 erpici translatori
 *   (GTET-180, GTET-140) le cui specifiche erano "[da definire]".
 * - `hasPhoto` = esiste una foto reale del prodotto negli asset legacy.
 *   La pipeline immagini (Fase 5) risolverà i path WebP e i fallback.
 * - `featured` = prodotto di punta/rappresentativo, in evidenza nella categoria.
 */

export type Spec = [label: string, value: string];

export interface Product {
	code: string; // es. "GT-400"
	slug: string; // es. "gt-400"
	name: string;
	category: string; // slug categoria
	short: string; // descrizione breve (1 riga)
	description: string; // descrizione estesa
	specs: Spec[];
	hasPhoto: boolean;
	featured?: boolean;
}

export const products: Product[] = [
	// ── SEMINATRICI ──────────────────────────────────────────────
	{
		code: 'GT-400',
		slug: 'gt-400',
		name: 'GT-400 Seminatrice Pneumatica di Precisione',
		category: 'seminatrici',
		short: 'Semina precisa su grandi superfici con 34 gambali per semi grandi e 23 per semi piccoli.',
		description:
			"La seminatrice GT-400 è l'attrezzo ideale per la semina su grandi appezzamenti di terreno. Grazie alla potenza dell'aria compressa, il seme viene distribuito uniformemente in tutti i 34 gambali garantendo una semina precisa e omogenea. La tramoggia dedicata da 110 kg permette di gestire anche i semi piccoli con 23 gambali specifici. La larghezza di lavoro di 4 metri assicura alta produttività, mentre la chiusura idraulica a 2,5 metri facilita il trasporto su strada in totale sicurezza. Il segnafile idraulico a disco completa l'equipaggiamento per un lavoro professionale.",
		specs: [
			['Larghezza di lavoro', '4,00 m'],
			['Larghezza chiusa', '2,50 m'],
			['Bracci semi grandi', '34'],
			['Gambali semi piccoli', '23'],
			['Capacità tramoggia grandi', '600 kg'],
			['Capacità tramoggia piccoli', '110 kg'],
			['Peso', '1700 kg']
		],
		hasPhoto: true,
		featured: true
	},
	{
		code: 'GT-312',
		slug: 'gt-312',
		name: 'GT-312 Seminatrice Meccanica Professionale',
		category: 'seminatrici',
		short: 'Seminatrice meccanica 3 m con 25 gambali, erpice incorporato e doppia tramoggia.',
		description:
			"La seminatrice GT-312 rappresenta la soluzione versatile per appezzamenti di medie dimensioni. Con i suoi 3 metri di larghezza lavorativa e 25 gambali, garantisce una distribuzione uniforme del seme su ogni tipo di terreno. L'erpice incorporato anteriore prepara il letto di semina ottimale, mentre il variatore per il dosaggio ti permette di regolare la quantità di seme con precisione. Le doppie tramogge per semi grandi e piccoli rendono questo attrezzo estremamente flessibile per diverse colture. Il copriseme posteriore completa il ciclo garantendo una copertura perfetta.",
		specs: [
			['Larghezza di lavoro', '3,00 m'],
			['Numero gambali', '25'],
			['Erpice anteriore', 'Incorporato'],
			['Variatore dosaggio', 'Sì'],
			['Tramoggia doppia', 'Semi grandi + piccoli'],
			['Copriseme', 'Posteriore']
		],
		hasPhoto: true
	},
	{
		code: 'GT-250',
		slug: 'gt-250',
		name: 'GT-250 Seminatrice Meccanica Compatta',
		category: 'seminatrici',
		short: 'Seminatrice compatta 2,35 m con 19 gambali, ideale per piccoli appezzamenti.',
		description:
			"La seminatrice GT-250 è perfetta per chi lavora su appezzamenti più contenuti ma non vuole rinunciare alla qualità. Con 2,35 metri di larghezza e 19 gambali distanziati di 12,5 cm, garantisce precisione e uniformità di semina. L'erpice anteriore incorporato prepara il terreno, mentre il sistema di doppia tramoggia ti permette di alternare facilmente tra semi grandi e piccoli. Il variatore per il dosaggio assicura il controllo totale sulla quantità di seme distribuito. Con i suoi 800 kg di peso, è facilmente gestibile anche con trattori di media potenza.",
		specs: [
			['Larghezza di lavoro', '2,35 m'],
			['Numero gambali', '19'],
			['Interfila', '12,5 cm'],
			['Peso', '800 kg'],
			['Erpice anteriore', 'Incorporato'],
			['Tramoggia doppia', 'Semi grandi + piccoli'],
			['Copriseme', 'Posteriore']
		],
		hasPhoto: true
	},

	// ── ERPICI CLASSICI A MOLLE ──────────────────────────────────
	{
		code: 'GTE-330',
		slug: 'gte-330',
		name: 'GTE-330 Erpice a Molle Professionale 3.3m',
		category: 'erpici-classici',
		short: 'Erpice versatile 3,3 m con 33 gambali, sistema Start&Stop e chiusura laterale.',
		description:
			"L'erpice GTE-330 è la scelta professionale per la preparazione ottimale del terreno su medie-grandi superfici. I 33 gambali da 32 mm con sistema «Start and Stop» ti permettono di lavorare anche in presenza di ostacoli senza danneggiare l'attrezzo. Le boccole in nylon garantiscono scorrevolezza e durata, mentre i vomeri da 105 mm assicurano un lavoro profondo ed efficace. Le spondine laterali manuali ti consentono di adattare la larghezza alle tue esigenze. Con una profondità di lavoro fino a 15 cm e conformità CE, questo erpice è la soluzione ideale per dissodamento, arieggiatura e preparazione del letto di semina.",
		specs: [
			['Larghezza macchina', '2500 mm'],
			['Larghezza lavorativa', '3300 mm'],
			['Numero gambali', '33'],
			['Diametro gambale', '32 mm'],
			['Dimensione vomero', '105 mm'],
			['Profondità lavoro', '100–150 mm'],
			['Peso', '610 kg'],
			['Sistema Start&Stop', 'Sì'],
			['Marcatura CE', 'Sì']
		],
		hasPhoto: false,
		featured: true
	},
	{
		code: 'GTE-490',
		slug: 'gte-490',
		name: 'GTE-490 Erpice a Molle Idraulico 4.9m',
		category: 'erpici-classici',
		short: 'Erpice di grande larghezza 4,9 m con 49 gambali e chiusura idraulica a 2,5 m.',
		description:
			"L'erpice GTE-490 è progettato per chi necessita di alta produttività su grandi appezzamenti. Con 4,9 metri di larghezza lavorativa e 49 gambali molleggianti, copri più superficie in meno tempo mantenendo la qualità del lavoro. Il sistema di chiusura idraulica delle spondine laterali ti permette di ridurre la larghezza a 2,5 metri per il trasporto su strada in totale sicurezza. I gambali molleggianti si adattano automaticamente alle irregolarità del terreno garantendo una profondità costante. Con 980 kg di peso e certificazione CE, è la soluzione professionale per aziende agricole moderne.",
		specs: [
			['Larghezza di lavoro', '4900 mm'],
			['Larghezza chiusa', '2500 mm'],
			['Numero gambali', '49'],
			['Interfila', '105 mm'],
			['Profondità lavoro', '100–150 mm'],
			['Peso', '980 kg'],
			['Chiusura laterale', 'Idraulica'],
			['Marcatura CE', 'Sì']
		],
		hasPhoto: true,
		featured: true
	},
	{
		code: 'GTE-410',
		slug: 'gte-410',
		name: 'GTE-410 Erpice a Molle Idraulico 4.1m',
		category: 'erpici-classici',
		short: 'Erpice 4,1 m con 41 gambali, spondine idrauliche e chiusura per trasporto.',
		description:
			"L'erpice GTE-410 combina alta capacità produttiva e praticità di trasporto. Con 4,1 metri di larghezza e 41 gambali molleggianti, lavora efficacemente su grandi superfici mantenendo precisione e uniformità. Le spondine laterali a sollevamento idraulico ti permettono di chiudere l'attrezzo a 2,5 metri per circolare su strada senza problemi. Il sistema di gambali molleggianti con interfila di 10,5 cm garantisce una lavorazione profonda del terreno fino a 15 cm. Conforme alla direttiva macchine CE, pesa 610 kg ed è perfetto per trattori di media-alta potenza.",
		specs: [
			['Larghezza di lavoro', '4100 mm'],
			['Larghezza chiusa', '2500 mm'],
			['Numero gambali', '41'],
			['Interfila', '105 mm'],
			['Profondità lavoro', '100–150 mm'],
			['Peso', '610 kg'],
			['Chiusura laterale', 'Idraulica'],
			['Marcatura CE', 'Sì']
		],
		hasPhoto: true,
		featured: true
	},
	{
		code: 'GTE-300',
		slug: 'gte-300',
		name: 'GTE-300 Erpice a Molle 3.0m',
		category: 'erpici-classici',
		short: 'Erpice 3 m con 29 gambali, sistema Start&Stop e spondine laterali manuali.',
		description:
			"L'erpice GTE-300 è ideale per aziende che cercano un equilibrio tra larghezza di lavoro e maneggevolezza. Con 3 metri di larghezza effettiva e 29 gambali da 32 mm, lavora efficacemente su appezzamenti di medie dimensioni. Il sistema «Start and Stop» sui gambali protegge l'attrezzo da urti e ostacoli, mentre le boccole in nylon riducono l'usura e la manutenzione. I vomeri da 105 mm penetrano efficacemente nel terreno per una profondità fino a 15 cm. Le spondine laterali manuali DX e SX ti permettono di regolare la larghezza. Con 490 kg di peso e certificazione CE, è facilmente gestibile.",
		specs: [
			['Larghezza macchina', '2200 mm'],
			['Larghezza lavorativa', '3000 mm'],
			['Numero gambali', '29'],
			['Diametro gambale', '32 mm'],
			['Profondità lavoro', '100–150 mm'],
			['Peso', '490 kg'],
			['Sistema Start&Stop', 'Sì'],
			['Marcatura CE', 'Sì']
		],
		hasPhoto: false
	},
	{
		code: 'GTE-250',
		slug: 'gte-250',
		name: 'GTE-250 Erpice a Molle 2.5m',
		category: 'erpici-classici',
		short: 'Erpice compatto 2,5 m con 25 gambali molleggianti per piccoli appezzamenti.',
		description:
			"L'erpice GTE-250 è la soluzione perfetta per chi lavora su appezzamenti più contenuti senza rinunciare alla qualità professionale. Con 2,5 metri di larghezza e 25 gambali molleggianti, garantisce una lavorazione uniforme del terreno. Il sistema di assolcatori molleggianti si adatta alle irregolarità del suolo mantenendo una profondità costante tra 10 e 15 cm. L'interfila di 10,5 cm assicura una copertura completa del terreno. Con 390 kg di peso, è facilmente abbinabile anche a trattori di piccola-media potenza. Conforme alla direttiva macchine CE.",
		specs: [
			['Larghezza di lavoro', '2500 mm'],
			['Numero gambali', '25'],
			['Interfila', '105 mm'],
			['Profondità lavoro', '100–150 mm'],
			['Peso', '390 kg'],
			['Marcatura CE', 'Sì']
		],
		hasPhoto: false
	},
	{
		code: 'GTE-220',
		slug: 'gte-220',
		name: 'GTE-220 Erpice a Molle 2.2m',
		category: 'erpici-classici',
		short: 'Erpice 2,2 m con 21 gambali, ideale per piccole superfici e maneggevolezza.',
		description:
			"L'erpice GTE-220 è perfetto per chi necessita di massima maneggevolezza su terreni più piccoli o irregolari. Con 2,2 metri di larghezza e 21 gambali molleggianti, lavora efficacemente anche in spazi ristretti. Il sistema di assolcatori molleggianti garantisce una profondità di lavoro costante tra 10 e 15 cm, adattandosi alle irregolarità del suolo. Con soli 280 kg di peso, è facilmente trasportabile e gestibile anche con trattori di bassa potenza. L'interfila di 10,5 cm assicura una copertura completa senza lasciare zone non lavorate.",
		specs: [
			['Larghezza di lavoro', '2200 mm'],
			['Numero gambali', '21'],
			['Interfila', '105 mm'],
			['Profondità lavoro', '100–150 mm'],
			['Peso', '280 kg']
		],
		hasPhoto: false
	},
	{
		code: 'GTE-210',
		slug: 'gte-210',
		name: 'GTE-210 Erpice a Molle 2.1m',
		category: 'erpici-classici',
		short: 'Erpice compatto 2,1 m con 21 gambali molleggianti per massima versatilità.',
		description:
			"L'erpice GTE-210 è la scelta versatile per chi cerca un attrezzo compatto ma efficace. Con 2,1 metri di larghezza lavorativa e 21 gambali molleggianti, garantisce prestazioni professionali anche su appezzamenti più piccoli. Il sistema molleggiante si adatta automaticamente alle irregolarità del terreno mantenendo una profondità costante fino a 15 cm. L'interfila di 105 mm assicura una lavorazione completa ed uniforme. Con 270 kg di peso, è facilmente abbinabile a trattori di piccola-media cilindrata, ideale per aziende agricole familiari.",
		specs: [
			['Larghezza di lavoro', '2100 mm'],
			['Numero gambali', '21'],
			['Interfila', '105 mm'],
			['Profondità lavoro', '100–150 mm'],
			['Peso', '270 kg']
		],
		hasPhoto: false
	},
	{
		code: 'GTE-180',
		slug: 'gte-180',
		name: 'GTE-180 Erpice a Molle 1.8m',
		category: 'erpici-classici',
		short: 'Erpice leggero 1,8 m con 17 gambali per piccoli trattori e orti.',
		description:
			"L'erpice GTE-180 è la soluzione ideale per piccole aziende agricole e orti professionali. Con 1,8 metri di larghezza e 17 gambali molleggianti, garantisce una lavorazione efficace anche con trattori di piccola cilindrata. Il sistema di assolcatori molleggianti mantiene una profondità costante tra 10 e 15 cm, adattandosi perfettamente alle irregolarità del terreno. L'interfila di 105 mm assicura una copertura completa. Con soli 230 kg di peso, è estremamente maneggevole e perfetto per chi cerca massima versatilità su superfici ridotte.",
		specs: [
			['Larghezza di lavoro', '1800 mm'],
			['Numero gambali', '17'],
			['Interfila', '105 mm'],
			['Profondità lavoro', '100–150 mm'],
			['Peso', '230 kg']
		],
		hasPhoto: false
	},
	{
		code: 'GTE-170',
		slug: 'gte-170',
		name: 'GTE-170 Erpice a Molle 1.7m',
		category: 'erpici-classici',
		short: 'Erpice ultracompatto 1,7 m con 17 gambali per massima maneggevolezza.',
		description:
			"L'erpice GTE-170 è perfetto per chi lavora su terreni piccoli o particolarmente irregolari dove la maneggevolezza è fondamentale. Con 1,7 metri di larghezza e 17 gambali molleggianti, garantisce una lavorazione precisa anche in spazi ristretti. Il sistema di assolcatori molleggianti mantiene il contatto costante con il terreno per una profondità uniforme fino a 15 cm. Con 220 kg di peso, è facilmente gestibile anche con i trattori più piccoli, ideale per orti professionali, vivai e piccole aziende agricole.",
		specs: [
			['Larghezza di lavoro', '1700 mm'],
			['Numero gambali', '17'],
			['Interfila', '105 mm'],
			['Profondità lavoro', '100–150 mm'],
			['Peso', '220 kg']
		],
		hasPhoto: false
	},
	{
		code: 'GTE-160',
		slug: 'gte-160',
		name: 'GTE-160 Erpice a Molle 1.6m',
		category: 'erpici-classici',
		short: 'Erpice compatto 1,6 m con 13 gambali per piccoli appezzamenti.',
		description:
			"L'erpice GTE-160 è la soluzione compatta per chi necessita di un attrezzo leggero ma efficace. Con 1,6 metri di larghezza e 13 gambali molleggianti, lavora perfettamente su piccoli appezzamenti e terreni irregolari. Il sistema molleggiante garantisce una profondità di lavoro costante tra 10 e 15 cm, adattandosi alle irregolarità del suolo. L'interfila di 105 mm assicura una copertura uniforme. Con 130 kg di peso, è estremamente leggero e facilmente abbinabile a piccoli trattori, ideale per orti e piccole colture specializzate.",
		specs: [
			['Larghezza di lavoro', '1600 mm'],
			['Numero gambali', '13'],
			['Interfila', '105 mm'],
			['Profondità lavoro', '100–150 mm'],
			['Peso', '130 kg']
		],
		hasPhoto: false
	},
	{
		code: 'GTE-140',
		slug: 'gte-140',
		name: 'GTE-140 Erpice a Molle 1.4m',
		category: 'erpici-classici',
		short: 'Erpice mini 1,4 m con 13 gambali per orti e piccole superfici.',
		description:
			"L'erpice GTE-140 è la scelta perfetta per orti professionali e piccole superfici che richiedono massima precisione. Con 1,4 metri di larghezza e 13 gambali molleggianti, garantisce una lavorazione accurata anche negli spazi più ristretti. Il sistema di assolcatori molleggianti mantiene una profondità costante tra 10 e 15 cm, perfetto per la preparazione del letto di semina. Con soli 130 kg di peso, è facilmente gestibile anche manualmente e si abbina perfettamente a motocoltivatori e piccoli trattori.",
		specs: [
			['Larghezza di lavoro', '1400 mm'],
			['Numero gambali', '13'],
			['Interfila', '105 mm'],
			['Profondità lavoro', '100–150 mm'],
			['Peso', '130 kg']
		],
		hasPhoto: false
	},
	{
		code: 'GTE-125',
		slug: 'gte-125',
		name: 'GTE-125 Erpice a Molle 1.25m',
		category: 'erpici-classici',
		short: 'Erpice ultraleggero 1,25 m con 10 gambali per motocoltivatori.',
		description:
			"L'erpice GTE-125 è progettato specificamente per motocoltivatori e piccoli trattori. Con 1,25 metri di larghezza e 10 gambali molleggianti, garantisce una lavorazione efficace su orti e piccole superfici. Il sistema molleggiante si adatta perfettamente alle irregolarità del terreno mantenendo una profondità costante tra 10 e 15 cm. L'interfila di 105 mm assicura una copertura completa. Con soli 105 kg di peso, è estremamente leggero e maneggevole, perfetto per chi cerca la massima versatilità su superfici ridotte.",
		specs: [
			['Larghezza di lavoro', '1250 mm'],
			['Numero gambali', '10'],
			['Interfila', '105 mm'],
			['Profondità lavoro', '100–150 mm'],
			['Peso', '105 kg']
		],
		hasPhoto: false
	},
	{
		code: 'GTE-120',
		slug: 'gte-120',
		name: 'GTE-120 Erpice a Molle 1.2m',
		category: 'erpici-classici',
		short: 'Erpice minimo 1,2 m con 9 gambali per motocoltivatori e piccoli orti.',
		description:
			"L'erpice GTE-120 è il modello più compatto della gamma, ideale per motocoltivatori e piccoli orti domestici. Con 1,2 metri di larghezza e 9 gambali molleggianti, garantisce una lavorazione precisa anche negli spazi più ristretti. Il sistema di assolcatori molleggianti mantiene una profondità costante tra 10 e 15 cm, perfetto per la preparazione del terreno prima della semina. Con soli 100 kg di peso, è il più leggero della gamma e facilmente trasportabile, ideale per piccole aziende agricole e orti professionali.",
		specs: [
			['Larghezza di lavoro', '1200 mm'],
			['Numero gambali', '9'],
			['Interfila', '105 mm'],
			['Profondità lavoro', '100–150 mm'],
			['Peso', '100 kg']
		],
		hasPhoto: false
	},

	// ── ERPICI SPECIALI (pesanti + translatore) ──────────────────
	{
		code: 'GTEP-490',
		slug: 'gtep-490',
		name: 'GTEP-490 Erpice Pesante Professionale 4.9m',
		category: 'erpici-speciali',
		short: 'Erpice pesante 4,9 m con 33 assolcatori, profondità 25 cm e chiusura idraulica.',
		description:
			"L'erpice pesante GTEP-490 è la soluzione professionale per chi necessita di una lavorazione profonda e intensa del terreno. Con 4,9 metri di larghezza e 33 assolcatori rinforzati, lavora efficacemente anche su terreni duri e compattati raggiungendo una profondità fino a 25 cm. Il sistema «Start and Stop» sui gambali protegge l'attrezzo da urti importanti, mentre il pettine posteriore a denti affina la lavorazione. Le spondine laterali a sollevamento idraulico permettono la chiusura a 2,5 metri per il trasporto su strada. Con 1500 kg di peso e certificazione CE, richiede trattori di alta potenza ma garantisce risultati eccezionali.",
		specs: [
			['Larghezza di lavoro', '4900 mm'],
			['Larghezza chiusa', '2500 mm'],
			['Numero assolcatori', '33'],
			['Interfila', '150 mm'],
			['Profondità lavoro', '150–250 mm'],
			['Peso', '1500 kg'],
			['Sistema Start&Stop', 'Sì'],
			['Pettine posteriore', 'A denti'],
			['Chiusura laterale', 'Idraulica'],
			['Marcatura CE', 'Sì']
		],
		hasPhoto: false,
		featured: true
	},
	{
		code: 'GTEP-360',
		slug: 'gtep-360',
		name: 'GTEP-360 Erpice Pesante 3.6m',
		category: 'erpici-speciali',
		short: 'Erpice pesante 3,6 m con 25 assolcatori rinforzati e pettine posteriore.',
		description:
			"L'erpice pesante GTEP-360 è progettato per lavorazioni profonde su terreni difficili e compattati. Con 3,6 metri di larghezza e 25 assolcatori rinforzati, penetra efficacemente nel terreno fino a 25 cm di profondità. Il sistema di assolcatori molleggianti ad alta resistenza garantisce robustezza e durata anche nelle condizioni più impegnative. Il pettine posteriore a denti affina la lavorazione lasciando il terreno perfettamente preparato. Le spondine laterali a sollevamento idraulico ti permettono di chiudere l'attrezzo a 2,5 metri per circolare su strada. Con 910 kg di peso, richiede trattori di media-alta potenza.",
		specs: [
			['Larghezza di lavoro', '3600 mm'],
			['Larghezza chiusa', '2500 mm'],
			['Numero assolcatori', '25'],
			['Interfila', '150 mm'],
			['Profondità lavoro', '150–250 mm'],
			['Peso', '910 kg'],
			['Pettine posteriore', 'A denti'],
			['Chiusura laterale', 'Idraulica']
		],
		hasPhoto: true
	},
	{
		code: 'GTET-210',
		slug: 'gtet-210',
		name: 'GTET-210 Erpice Translatore Idraulico 2.1m',
		category: 'erpici-speciali',
		short: 'Erpice translatore con movimento laterale idraulico per lavorare a ridosso degli ostacoli.',
		description:
			"L'erpice translatore GTET-210 rappresenta l'evoluzione degli erpici tradizionali grazie al sistema di traslazione laterale idraulica. Questa caratteristica ti permette di lavorare il terreno anche a ridosso di siepi, muretti e ostacoli senza danneggiare né l'attrezzo né la coltura. La larghezza di 2,1 metri è ideale per filari e piccoli appezzamenti. Il sistema idraulico di traslazione è facilmente controllabile dalla cabina del trattore, permettendoti di spostare lateralmente l'intero corpo dell'erpice.",
		specs: [
			['Larghezza base', '2100 mm'],
			['Traslazione laterale', 'Idraulica'],
			['Controllo', 'Da cabina']
		],
		hasPhoto: true
	},

	// ── RULLI DOPO-SEMINA ────────────────────────────────────────
	{
		code: 'GTR-600',
		slug: 'gtr-600',
		name: 'GTR-600 Rullo Dopo-Semina Professionale 6m',
		category: 'rulli',
		short: 'Rullo 6 m con 3 cilindri autolivellanti, chiusura idraulica e raschietti.',
		description:
			"Il rullo GTR-600 è l'attrezzo ideale per ottimizzare il contatto seme-suolo e garantire una germinazione uniforme. Con 6 metri di larghezza lavorativa e 3 rulli indipendenti con sistema autolivellante, si adatta perfettamente alle irregolarità del terreno mantenendo una pressione costante. I raschietti automatici mantengono i rulli sempre puliti anche in condizioni di terreno umido. La chiusura idraulica a 2,5 metri facilita il trasporto su strada in totale sicurezza. Come optional puoi aggiungere l'erpice anteriore a denti per lo spianamento del terreno. Con 2180 kg di peso, è una macchina trainata robusta e affidabile.",
		specs: [
			['Larghezza di lavoro', '6000 mm'],
			['Larghezza chiusa', '2500 mm'],
			['Numero rulli', '3 indipendenti'],
			['Sistema', 'Autolivellante'],
			['Raschietti', 'Sì'],
			['Chiusura', 'Idraulica'],
			['Peso', '2180 kg'],
			['Optional', 'Erpice anteriore, cuscinetti autolubrificanti']
		],
		hasPhoto: true,
		featured: true
	},
	{
		code: 'GTR-254',
		slug: 'gtr-254',
		name: 'GTR-254 Rullo Dopo-Semina Compatto 2.54m',
		category: 'rulli',
		short: 'Rullo compatto 2,54 m trainabile o con attacco a sollevatore.',
		description:
			"Il rullo GTR-254 è la soluzione versatile per chi cerca un attrezzo compatto ma efficace per la compattazione del terreno dopo la semina. Con 2,54 metri di larghezza lavorativa, migliora il contatto tra seme e suolo favorendo una germinazione rapida e uniforme. La doppia possibilità di attacco (trainabile o a sollevatore) lo rende estremamente versatile e adattabile a diverse tipologie di trattori. Ideale per piccole-medie superfici, garantisce risultati professionali con la massima praticità. Perfetto per essere abbinato a seminatrici da 2-3 metri.",
		specs: [
			['Larghezza di lavoro', '2540 mm'],
			['Attacco', 'Trainabile o a sollevatore'],
			['Versatilità', 'Doppio sistema di aggancio']
		],
		hasPhoto: false
	},

	// ── CARICATORI FRONTALI ──────────────────────────────────────
	{
		code: 'GT-170',
		slug: 'gt-170',
		name: 'GT-170 Caricatore Frontale Professionale',
		category: 'caricatori-frontali',
		short: 'Caricatore frontale con autolivellante meccanico e doppio aggancio rapido.',
		description:
			"Il caricatore frontale GT-170 è la soluzione versatile per tutte le operazioni di movimentazione in azienda. L'autolivellante meccanico mantiene la benna sempre in posizione orizzontale durante il sollevamento, evitando fuoriuscite di materiale. Gli agganci rapidi anteriore e posteriore ti permettono di cambiare rapidamente gli accessori in base alle esigenze del momento. Il sistema viene montato direttamente sul tuo trattore e si integra perfettamente con i comandi idraulici esistenti. Robusto e affidabile, è ideale per movimentazione di materiali sfusi, carico e scarico, manutenzione dell'azienda.",
		specs: [
			['Autolivellante', 'Meccanico'],
			['Aggancio rapido', 'Anteriore + posteriore'],
			['Montaggio', 'Su trattore cliente'],
			['Include', 'Struttura di montaggio']
		],
		hasPhoto: true,
		featured: true
	},
	{
		code: 'GT-150',
		slug: 'gt-150',
		name: 'GT-150 Caricatore Frontale con Forchettone e Benna',
		category: 'caricatori-frontali',
		short: 'Caricatore frontale completo con autolivellante, forchettone e benna.',
		description:
			"Il caricatore frontale GT-150 è il kit completo per massimizzare la versatilità del tuo trattore. Dotato di autolivellante meccanico per mantenere il carico sempre stabile, include sia il forchettone che la benna per affrontare ogni tipo di lavoro. Gli agganci e sganci rapidi anteriore e posteriore ti permettono di cambiare accessorio in pochi secondi senza attrezzi aggiuntivi. Viene fornito montato sul tuo trattore e pronto all'uso. Perfetto per movimentazione pallet, materiali sfusi, pulizia stalle, carico e scarico merci.",
		specs: [
			['Autolivellante', 'Meccanico'],
			['Aggancio rapido', 'Anteriore + posteriore'],
			['Include', 'Forchettone + benna'],
			['Montaggio', 'Su trattore cliente']
		],
		hasPhoto: true
	},
	{
		code: 'GT-130',
		slug: 'gt-130',
		name: 'GT-130 Caricatore Frontale Compatto',
		category: 'caricatori-frontali',
		short: 'Caricatore frontale compatto con autolivellante e benna standard.',
		description:
			"Il caricatore frontale GT-130 è progettato per trattori di piccola-media cilindrata che necessitano di un sistema di carico affidabile ma compatto. L'autolivellante meccanico garantisce stabilità durante la movimentazione, mentre gli agganci e sganci rapidi anteriore e posteriore semplificano il cambio degli accessori. Viene fornito completo di benna standard e struttura di montaggio per il tuo trattore. Ideale per piccole-medie aziende agricole, pulizia stalle, movimentazione materiali, manutenzione aziendale. Robusto ma leggero, non appesantisce eccessivamente il trattore.",
		specs: [
			['Autolivellante', 'Meccanico'],
			['Aggancio rapido', 'Anteriore + posteriore'],
			['Include', 'Benna standard'],
			['Montaggio', 'Su trattore cliente']
		],
		hasPhoto: true
	},

	// ── ATTREZZATURA DI SUPPORTO ─────────────────────────────────
	{
		code: 'GTRS-250',
		slug: 'gtrs-250',
		name: 'GTRS-250 Raschiatore Universale Professionale',
		category: 'attrezzatura-di-supporto',
		short: 'Raschiatore universale 3 m per pulizia stalle, livellamento sentieri e spargimento insilato.',
		description:
			"Il raschiatore GTRS-250 è l'attrezzo multiuso indispensabile per ogni azienda agricola moderna. Con i suoi 3 metri di larghezza di lavoro effettiva e soli 2,15 metri di larghezza macchina, è perfetto per pulire i pavimenti delle stalle, livellare i sentieri, riempire i fossi e spargere l'insilato. La lama del raschietto spessa 12 mm garantisce robustezza e durata anche nelle condizioni più impegnative, mentre l'elastico antiabrasivo protegge da usura e danni. L'accoppiamento automatico con barra a fori semplifica il montaggio, e i cuscinetti regolabili in metallo assicurano precisione e affidabilità. Lavora sia in avanti che indietro, garantendo massima versatilità operativa.",
		specs: [
			['Larghezza macchina', '2150 mm'],
			['Larghezza di lavoro', '3000 mm'],
			['Spessore lama', '12 mm'],
			['Accoppiamento', 'Automatico con barra a fori'],
			['Elastico antiabrasivo', 'Sì'],
			['Cuscinetti', 'Regolabili in metallo'],
			['Direzione lavoro', 'Avanti / indietro']
		],
		hasPhoto: true,
		featured: true
	},
	{
		code: 'GT-AL550',
		slug: 'gt-al550',
		name: 'GT-AL550 Agitatore per Liquame 5.5m',
		category: 'attrezzatura-di-supporto',
		short: 'Agitatore per liquame 5,5 m con attacco a 3 punti e rotazione PTO.',
		description:
			"L'agitatore GT-AL550 è l'attrezzo professionale per mantenere omogeneo il liquame nelle vasche aziendali. Con una lunghezza nominale di 5,5 metri, raggiunge efficacemente anche le vasche più profonde. L'attacco a 3 punti facilita il montaggio e smontaggio dal trattore, mentre la rotazione delle eliche avviene tramite presa di forza (PTO). Il sistema di eliche progettato appositamente garantisce un'agitazione efficace evitando la formazione di croste e sedimenti. Ideale per allevamenti bovini, suini e per chi necessita di mantenere la qualità del liquame prima dello spandimento.",
		specs: [
			['Lunghezza nominale', '5500 mm'],
			['Attacco', 'A 3 punti'],
			['Rotazione', 'Via PTO'],
			['Sistema', 'Eliche multiple']
		],
		hasPhoto: false
	},
	{
		code: 'GTS',
		slug: 'gts',
		name: 'GTS Spaccalegna Idraulico Mobile',
		category: 'attrezzatura-di-supporto',
		short: 'Spaccalegna idraulico su ruote con pistone e attacco a 3 punti.',
		description:
			"Lo spaccalegna GTS è l'attrezzo versatile per chi necessita di preparare legna da ardere in azienda. Il sistema idraulico con pistone garantisce potenza e precisione nello spaccare anche i tronchi più duri e nodosi. La configurazione su ruote lo rende facilmente trasportabile dove serve, mentre l'attacco a 3 punti permette di agganciarlo al trattore per spostamenti più lunghi. Ideale per aziende agricole, agriturismi, vivai e per chi commercia legna da ardere. Robusto e sicuro, è progettato per un utilizzo professionale intensivo.",
		specs: [
			['Sistema', 'Idraulico con pistone'],
			['Mobilità', 'Su ruote'],
			['Attacco', 'A 3 punti'],
			['Trasportabilità', 'Sì']
		],
		hasPhoto: false
	},

	// ── FRANTUMAZIONE CEREALI ────────────────────────────────────
	{
		code: 'GTM-49',
		slug: 'gtm-49',
		name: 'GTM-49 Molino Elettrico Professionale',
		category: 'frantumazione-cereali',
		short: 'Molino elettrico 22,5 kW con 24 martelli e sistema riciclo polveri.',
		description:
			"Il molino elettrico GTM-49 è la soluzione professionale per la macinazione di cereali e mangimi in azienda. Il potente motore elettrico da 22,5 kW garantisce alte prestazioni e continuità di lavoro, mentre i 24 martelli assicurano una macinazione uniforme e di qualità. Il sistema di riciclo polveri riduce gli sprechi e mantiene l'ambiente di lavoro più pulito. Ideale per aziende agricole e zootecniche che producono mangimi in proprio, garantisce autonomia e risparmio economico. Robusto e affidabile, è progettato per un utilizzo intensivo.",
		specs: [
			['Motore elettrico', '22,5 kW'],
			['Numero martelli', '24'],
			['Sistema riciclo', 'Polveri']
		],
		hasPhoto: false,
		featured: true
	}
];

/** Prodotti di una categoria, ordine catalogo. */
export function productsByCategory(slug: string): Product[] {
	return products.filter((p) => p.category === slug);
}

/** Prodotti in evidenza di una categoria (o tutti se nessuno marcato). */
export function featuredByCategory(slug: string): Product[] {
	const inCat = productsByCategory(slug);
	const featured = inCat.filter((p) => p.featured);
	return featured.length ? featured : inCat;
}

export function getProduct(slug: string): Product | undefined {
	return products.find((p) => p.slug === slug);
}

/** Prodotti di punta dell'azienda, per la homepage. */
export const flagshipProducts: Product[] = products.filter((p) => p.featured);
