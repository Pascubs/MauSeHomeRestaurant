import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

// Valori di default per il consenso
const DEFAULT_CONSENT = {
  necessary: true,
  analytics: false,
};

export const CookieConsent = ({ onConsentAction, onShowPolicy, initialConsent }) => {
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState(initialConsent || DEFAULT_CONSENT);

  const handleToggle = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAcceptAll = () => {
    onConsentAction({ necessary: true, analytics: true });
  };
  
  const handleRejectAll = () => {
    onConsentAction({ necessary: true, analytics: false });
  };
  
  const handleSavePreferences = () => {
    onConsentAction(preferences);
  };

  if (showPreferences) {
    return (
      jsxs("div", { 
        className: "cookie-banner", 
        "aria-live": "polite", 
        "aria-label": "Preferenze Cookie",
        children: [
          jsxs("div", {
            className: "container",
            children: [
                jsxs("div", {
                    className: "cookie-preferences",
                    children: [
                        jsx("h3", { children: "Personalizza Consenso" }),
                        jsx("p", { style: {marginBottom: '1rem', fontSize: '0.9rem'}, children: "Puoi scegliere quali cookie abilitare. Le tue preferenze saranno salvate per un anno."}),
                        jsxs("div", {
                            className: "preference-item",
                            children: [
                                jsx("div", {
                                    children: [
                                        jsx("label", { htmlFor: "necessary-cookie", children: "Strettamente Necessari" }),
                                        jsx("p", { children: "Questi cookie sono essenziali per il funzionamento del sito e non possono essere disabilitati." })
                                    ]
                                }),
                                jsx("label", {
                                    className: "switch",
                                    children: [
                                        jsx("input", { type: "checkbox", id: "necessary-cookie", checked: true, disabled: true }),
                                        jsx("span", { className: "slider" })
                                    ]
                                })
                            ]
                        }),
                        jsxs("div", {
                            className: "preference-item",
                            children: [
                                jsx("div", {
                                    children: [
                                        jsx("label", { htmlFor: "analytics-cookie", children: "Analitici" }),
                                        jsx("p", { children: "Questi cookie ci aiutano a capire come i visitatori interagiscono con il sito, in forma anonima." })
                                    ]
                                }),
                                jsx("label", {
                                    className: "switch",
                                    children: [
                                        jsx("input", { type: "checkbox", id: "analytics-cookie", checked: preferences.analytics, onChange: () => handleToggle('analytics') }),
                                        jsx("span", { className: "slider" })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                jsxs("div", {
                    className: "cookie-banner-actions",
                    children: [
                        jsx("button", { className: "btn btn-secondary", onClick: handleSavePreferences, children: "Salva Preferenze" }),
                        jsx("button", { className: "btn", onClick: handleAcceptAll, children: "Accetta Tutti" })
                    ]
                })
            ]
          })
        ]
      })
    );
  }

  return (
    jsx("div", {
      className: "cookie-banner",
      role: "dialog",
      "aria-live": "polite",
      "aria-label": "Banner Consenso Cookie",
      children: jsx("div", {
        className: "container",
        children: jsxs("div", {
          className: "cookie-banner-content",
          children: [
            jsx("div", {
              className: "cookie-banner-text",
              children: jsxs("p", {
                children: [
                  "Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. ",
                  jsx("a", {
                    href: "#",
                    onClick: (e) => { e.preventDefault(); onShowPolicy(); },
                    children: "Leggi la nostra Cookie Policy"
                  }),
                  "."
                ]
              })
            }),
            jsxs("div", {
              className: "cookie-banner-actions",
              children: [
                jsx("button", { className: "btn btn-secondary", onClick: () => setShowPreferences(true), children: "Personalizza" }),
                jsx("button", { className: "btn btn-secondary", onClick: handleRejectAll, children: "Rifiuta" }),
                jsx("button", { className: "btn", onClick: handleAcceptAll, children: "Accetta Tutti" })
              ]
            })
          ]
        })
      })
    })
  );
};
