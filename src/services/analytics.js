/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Servizio di analytics simulato.
// Le funzioni di questo servizio vengono eseguite SOLO se è stato ottenuto
// il consenso per i cookie di tipo "analytics".

let isInitialized = false;
let hasConsent = false;

const init = (consent) => {
  if (consent && consent.analytics) {
    if (!isInitialized) {
      hasConsent = true;
      isInitialized = true;
      // In un'applicazione reale, qui inizializzeresti la tua libreria di analytics
      // E.g., GAnalytics.init('UA-XXXXX-Y');
      console.log("✅ Analytics Service: Inizializzato (consenso ricevuto).");
      trackEvent('page_view', { page_path: window.location.pathname });
    }
  } else {
    // Se il consenso viene ritirato, ci assicuriamo che non vengano inviati altri eventi.
    hasConsent = false;
    isInitialized = false; 
    console.log("❌ Analytics Service: Non inizializzato (consenso non dato o ritirato).");
  }
};

const trackEvent = (eventName, eventParams) => {
  if (!hasConsent) {
    // console.log(`Analytics: Evento '${eventName}' non tracciato (consenso mancante).`);
    return;
  }
  // In un'applicazione reale, qui invieresti l'evento al tuo servizio di analytics.
  // E.g., GAnalytics.track(eventName, eventParams);
  console.log(`📊 Analytics Evento Tracciato: '${eventName}'`, eventParams);
};

export const AnalyticsService = {
  init,
  trackEvent,
};
