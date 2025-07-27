import { jsx, jsxs } from 'react/jsx-runtime';

export const CookiePolicy = ({ onClose }) => (
  jsx("div", { 
    className: "cookie-overlay",
    children: jsxs("div", {
        className: "cookie-policy-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "cookie-policy-title",
        children: [
            jsx("button", { onClick: onClose, className: "close-btn", "aria-label": "Chiudi", children: "×" }),
            jsx("h2", { id: "cookie-policy-title", children: "Cookie Policy" }),
            
            jsx("h3", { children: "Cosa sono i Cookie" }),
            jsx("p", { children: "I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita. Questo sito utilizza cookie per migliorare la tua esperienza di navigazione." }),

            jsx("h3", { children: "Tipi di Cookie utilizzati" }),
            jsx("p", { children: "Di seguito sono elencati i tipi di cookie che utilizziamo:" }),

            jsxs("div", {
                children: [
                    jsx("h4", { style: {marginTop: '1rem'}, children: "Cookie Tecnici (o Strettamente Necessari)" }),
                    jsx("p", { children: "Questi cookie sono indispensabili per il corretto funzionamento del sito. Includono, ad esempio, il cookie utilizzato per memorizzare le tue preferenze sul consenso ai cookie. Non richiedono il tuo consenso preventivo." })
                ]
            }),

            jsxs("div", {
                children: [
                    jsx("h4", { style: {marginTop: '1rem'}, children: "Cookie Analitici" }),
                    jsx("p", { children: "Questi cookie ci aiutano a capire come i visitatori interagiscono con il sito web, raccogliendo e trasmettendo informazioni in forma aggregata e anonima. L'uso di questi cookie è subordinato al tuo consenso." }),
                    jsx("p", { children: "Attualmente, utilizziamo un sistema di analytics simulato a scopo dimostrativo. Nessun dato personale viene raccolto o inviato a terze parti." })
                ]
            }),

            jsx("h3", { children: "Gestione dei Cookie" }),
            jsx("p", { children: "Puoi rivedere e modificare le tue preferenze sui cookie in qualsiasi momento cliccando su \"Impostazioni Cookie\" nel piè di pagina del nostro sito. Puoi anche gestire i cookie attraverso le impostazioni del tuo browser." }),

            jsx("h3", { children: "Titolare del Trattamento" }),
            jsx("p", { children: "Il titolare del trattamento dei dati è MauSé Home Restaurant, contattabile all'indirizzo email info@mausehomerestaurant.com." }),
            
            jsx("p", { style: {marginTop: '2rem', textAlign: 'center'}, children: jsx("button", { onClick: onClose, className: "btn", children: "Chiudi" }) })
        ]
    })
  })
);
