# Documentazione e Versioning - MauSé

Questo documento traccia le versioni del progetto e fornisce una panoramica tecnica essenziale.
Il progetto segue lo schema di [Semantic Versioning](https://semver.org/lang/it/) (MAJOR.MINOR.PATCH).

---

## Panoramica Tecnica

### Stack Tecnologico
- **React & JavaScript**: Per un'interfaccia utente moderna e performante, pronta per la produzione.
- **Google Gemini API**: L'applicazione utilizza l'SDK `@google/genai` per la generazione della tagline e per il motore del chatbot, con chiamate dirette dal client.
- **CSS Moderno**: Styling diretto con variabili CSS, Flexbox e Grid.

### Struttura Essenziale
- `index.html` / `index.css` / `index.js`: Entry point e stili globali.
- `src/App.js`: Componente radice che assembla l'applicazione.
- `src/components/`: Tutti i componenti React, suddivisi per funzione (common, features, layout, sections).
- `src/hooks/`: Custom hooks per la logica riutilizzabile (es. `useChat`).
- `src/services/`: Moduli per servizi esterni (Gemini API, Cookie, Analytics).
- `src/data/`: Dati statici (immagini galleria).
- `public/images/`: Tutte le immagini statiche del sito.

### Come apportare modifiche chiave
- **Testi delle sezioni**: Modifica i componenti in `src/components/sections/`.
- **Comportamento del Chatbot**: Aggiorna le istruzioni nel file `src/components/features/Chatbot.js`.
- **Immagini della Galleria**: Modifica l'array in `src/data/gallery.js`.
- **Immagini Statiche**: Sostituisci i file in `public/images/` mantenendo gli stessi nomi.
  > **Nota sulla Cache**: Se un'immagine non si aggiorna, forza l'aggiornamento del browser con `Ctrl+Shift+R` (Windows) o `Cmd+Shift+R` (Mac).

---

## Cronologia Versioni

### [1.4.0] - 30/07/2024

#### ✨ Implementazione Consenso Cookie (GDPR) e Rimozione Tracking

-   **Privacy-First**: Introdotto un sistema completo di gestione del consenso dei cookie conforme al GDPR.
-   **Banner di Consenso**: Aggiunto un banner non invasivo che permette agli utenti di accettare, rifiutare o personalizzare le preferenze dei cookie.
-   **Gestione Preferenze**: Gli utenti possono modificare le loro scelte in qualsiasi momento tramite un link nel footer ("Impostazioni Cookie").
-   **Disattivazione Analytics**: Il tracciamento analitico (simulato) viene attivato solo dopo aver ricevuto il consenso esplicito dell'utente.
-   **Policy Dettagliata**: Creata una pagina "Cookie Policy" accessibile dal banner e dal footer.
-   **Pulizia Generale**: Rimosso il codice di tracciamento precedente e semplificata la codebase per allinearla a un approccio incentrato sulla privacy.

### [1.6.0] - 01/08/2024

#### ✨ Sostituzione Logo Testuale con Immagine
-   **Branding Visivo**: Sostituito il titolo testuale "MauSé" nell'header con un logo grafico (`logo.png`) per rafforzare l'identità del brand e migliorare l'impatto visivo del sito.
-   **Miglioramento UI**: Aggiunto un leggero effetto di zoom al passaggio del mouse sul nuovo logo per una migliore interattività.
-   **Accessibilità**: Assicurata l'accessibilità del logo con l'aggiunta di un testo alternativo (`alt`) all'immagine e un'`aria-label` al link.

### [1.5.4] - 31/07/2024

#### 🐛 Correzione Posizionamento Chatbot
-   **Fix**: Risolto un bug di layout per cui il chatbot non appariva più come un elemento flottante in basso a destra, ma era posizionato staticamente alla fine della pagina. Ripristinati gli stili CSS corretti per il `chat-fab` e la `chat-window` per garantire il corretto comportamento visivo.

### [1.5.3] - 31/07/2024

#### ✨ Refactoring Stabilità Chatbot
-   **Refactor**: Migliorata drasticamente la stabilità e l'efficienza del chatbot. La logica è stata riscritta per utilizzare una sessione di chat persistente (`ai.chats.create`) invece di inviare l'intera cronologia ad ogni messaggio. Questo risolve i bug che impedivano al chatbot di funzionare correttamente e allinea l'implementazione alle best practice dell'SDK di Gemini.

### [1.5.2] - 30/07/2024

#### 🐛 Correzione Formattazione Link Chatbot

-   **Fix HTML "sporco"**: Risolto un bug critico che in alcuni casi poteva "sporcare" i link con codice HTML a causa di un ordine di formattazione non corretto. La logica è stata aggiornata per garantire che la formattazione del grassetto e la conversione dei link avvengano in una sequenza robusta, producendo sempre HTML pulito e funzionante.

### [1.5.1] - 30/07/2024

#### 🐛 Correzione Link Chatbot

-   **Link Cliccabili**: Risolto un bug per cui i link inviati dal chatbot (come quello per Google Maps) non erano cliccabili. Ora i link vengono correttamente convertiti in elementi `<a>` attivi e stilizzati per essere immediatamente riconoscibili.

### [1.5.0] - 30/07/2024

#### ✨ Aggiunta Posizione nel Chatbot

-   **Integrazione Mappe**: Il chatbot "Guida" ora è in grado di fornire la posizione dell'home restaurant e un link diretto a Google Maps per ottenere le indicazioni stradali.
-   **Aggiornamento Prompt**: Migliorate le istruzioni di sistema del chatbot per includere le nuove informazioni sulla localizzazione.

### [1.4.2] - 30/07/2024

#### 🐛 Correzione Stile Input Chatbot

-   **Miglioramento Contrasto**: Risolto un bug di visibilità nel campo di input del chatbot where, in alcune condizioni, il testo poteva non essere visibile. Impostato esplicitamente uno sfondo bianco per il campo e un colore definito per il testo placeholder, garantendo sempre un contrasto ottimale e una migliore leggibilità.

### [1.4.1] - 30/07/2024

#### 🐛 Correzione Bug di Stile

-   **Chatbot Fix**: Risolto un bug visivo nel chatbot dove testi lunghi e senza spazi (come indirizzi email o link) potevano fuoriuscire dalla finestra del messaggio, causando uno scroll orizzontale. Ora il testo va a capo correttamente, migliorando la leggibilità e l'usabilità.

### [1.4.0] - 30/07/2024

#### ✨ Rimozione Completa del Tracking e Semplificazione

-   **Privacy-First**: Rimosse completamente tutte le funzionalità di analytics e tracciamento dei cookie per garantire la massima privacy degli utenti.
-   **Interfaccia Utente Semplificata**: Eliminato il modale di consenso ai cookie e la relativa pagina di policy. L'interazione con il sito è ora più diretta e senza interruzioni.
-   **Pulizia Generale del Codice**: Rimossi i componenti React non più utilizzati (`CookieConsent`, `CookiePolicy`), i servizi (`analytics.js`, `cookie.js`) e gli stili CSS associati, risultando in una codebase più leggera e manutenibile.

### [1.3.0] - 29/07/2024

#### ✨ Refactoring Servizi AI

-   **Architettura Semplificata**: Rimosso il complesso proxy server-side (Cloudflare Function). L'applicazione ora utilizza l'SDK ufficiale `@google/genai` direttamente nel client, rendendo il codice più pulito, più semplice da mantenere e risolvendo i problemi di connettività.
-   **Integrazione Diretta**: Aggiornato il `GeminiService` per effettuare chiamate dirette all'API di Gemini, seguendo le più recenti best practice.
-   **Gestione API Key Standard**: La configurazione ora si basa sulla variabile d'ambiente standard `process.env.API_KEY` disponibile nel contesto di esecuzione del client.

### [1.2.3] - 28/07/2024

#### 🧹 Final Cleanup

-   **Rimozione File Obsoleti**: Eliminati definitivamente tutti i file sorgente TypeScript (`.ts`, `.tsx`) e i file di documentazione vuoti e non più necessari. Questo completa la migrazione a una codebase interamente JavaScript e pulisce la struttura del progetto.
-   **Aggiornamento Documentazione**: Aggiornata la cronologia delle versioni per riflettere la pulizia finale.

### [1.2.2] - 28/07/2024

#### 🧹 Code Cleanup Stage

-   **Rimozione Contenuto Obsoleto**: Svuotati tutti i file sorgente TypeScript (`.ts`, `.tsx`) e di documentazione non più necessari, in preparazione per la loro rimozione definitiva. Questo segna il completamento della transizione a una codebase interamente JavaScript.
-   **Aggiornamento Documentazione**: Aggiornata la sezione "Panoramica Tecnica" per riflettere lo stack tecnologico attuale e la nuova struttura del codice.

### [1.2.1] - 27/07/2024

#### 🧹 Code Cleanup & Fixes

-   **Correzione Immagini**: Aggiunto un versioning consistente (`?v=1.2`) a tutte le immagini per risolvere problemi di cache del browser.
-   **Pulizia Post-Migrazione**: Rimossi i contenuti di tutti i file sorgente TypeScript (`.ts`, `.tsx`) e di documentazione obsoleti, lasciando solo un commento per indicare che non sono più in uso. Questo completa la transizione a una codebase interamente JavaScript.

### [1.2.0] - 27/07/2024

#### 🚀 Build-Ready per la Produzione

-   **Rimozione di Babel In-Browser**: Eliminato `@babel/standalone` per fermare la compilazione del codice nel browser dell'utente, risolvendo l'avviso in console.
-   **JavaScript Pre-compilato**: Convertiti tutti i file sorgente TypeScript (`.ts`, `.tsx`) in JavaScript standard (`.js`). Questo migliora significativamente il tempo di caricamento iniziale e le performance, rendendo il sito veramente pronto per la produzione.
-   **Conformità ESM**: Aggiornati tutti i percorsi di importazione interni per includere l'estensione `.js`, garantendo la compatibilità con i moduli ES nativi del browser.

### [1.1.0] - 26/07/2024

#### 🧹 Refactoring e Pulizia

Questa versione si concentra sulla pulizia e l'ottimizzazione della codebase per la produzione.

-   **Codice Essenziale**: Rimossi file e codice non utilizzati (`src/data/events.ts`, tipi `EventData`).
-   **Documentazione Unificata**: Consolidata tutta la documentazione tecnica e di versioning in questo file, eliminando `DOCUMENTATION.md` e altri file `README.md` interni.
-   **Componenti Riutilizzabili**: Create le `SocialIcons` per ridurre la duplicazione del codice.
-   **Pulizia Dati**: Semplificati gli URL delle immagini nella galleria.
-   **Metadati Ottimizzati**: Resa più concisa la descrizione del progetto.

### [1.0.0] - 25/07/2024

#### ✨ Initial Production Release

Prima versione stabile del sito web di MauSé, pronta per la produzione.

-   **Architettura SPA**: Sito costruito come Single Page Application (React, TypeScript).
-   **Funzionalità Principali**: Sezioni Hero, Chi Siamo, Galleria, Eventi (placeholder), Contatti.
-   **Intelligenza Artificiale**: Tagline dinamica e assistente Chatbot basati su Google Gemini.
-   **Conformità GDPR**: Modale di consenso cookie avanzato con gestione delle preferenze.
-   **Design Responsivo**: Interfaccia ottimizzata per desktop e mobile.
-   **Documentazione Iniziale**: Struttura del progetto modulare e documentata.