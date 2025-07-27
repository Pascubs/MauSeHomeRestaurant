import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { useTagline } from './hooks/useTagline.js';
import { Header } from './components/layout/Header.js';
import { Footer } from './components/layout/Footer.js';
import { Hero } from './components/sections/Hero.js';
import { About } from './components/sections/About.js';
import { Gallery } from './components/sections/Gallery.js';
import { Events } from './components/sections/Events.js';
import { Contact } from './components/sections/Contact.js';
import { Chatbot } from './components/features/Chatbot.js';
import { CookieConsent } from './components/features/CookieConsent.js';
import { CookiePolicy } from './components/sections/CookiePolicy.js';
import { CookieService, CONSENT_COOKIE_NAME } from './services/cookie.js';
import { AnalyticsService } from './services/analytics.js';

export const App = () => {
  const { tagline, loading, error } = useTagline();
  const [isChatOpen, setChatOpen] = useState(false);
  
  // State for cookie consent management
  const [consent, setConsent] = useState(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);

  useEffect(() => {
    const consentCookie = CookieService.getCookie(CONSENT_COOKIE_NAME);
    if (!consentCookie) {
      setShowCookieBanner(true);
    } else {
      const currentConsent = JSON.parse(consentCookie);
      setConsent(currentConsent);
      AnalyticsService.init(currentConsent);
    }
  }, []);

  const handleConsentAction = (newConsent) => {
    setConsent(newConsent);
    CookieService.setCookie(CONSENT_COOKIE_NAME, JSON.stringify(newConsent), 365);
    setShowCookieBanner(false);
    AnalyticsService.init(newConsent);
  };
  
  const handleOpenCookieSettings = () => {
      setShowCookieBanner(true);
  };

  const handleToggleChat = () => setChatOpen(prev => !prev);

  return (
    jsxs(Fragment, {
      children: [
        jsx(Header, {}),
        jsxs("main", {
          children: [
            jsx(Hero, { tagline: tagline, loading: loading, error: error }),
            jsx(About, {}),
            jsx(Gallery, {}),
            jsx(Events, {}),
            jsx(Contact, {}),
            showCookiePolicy && jsx(CookiePolicy, { onClose: () => setShowCookiePolicy(false) })
          ]
        }),
        jsx(Footer, { onOpenCookieSettings: handleOpenCookieSettings }),
        jsx(Chatbot, {
          isOpen: isChatOpen,
          onToggle: handleToggleChat
        }),
        showCookieBanner && jsx(CookieConsent, {
            onConsentAction: handleConsentAction,
            onShowPolicy: () => setShowCookiePolicy(true),
            initialConsent: consent, // Pass current consent to pre-fill settings
        })
      ]
    })
  );
};
