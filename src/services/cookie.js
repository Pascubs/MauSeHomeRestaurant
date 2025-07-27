/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const CONSENT_COOKIE_NAME = 'mause_cookie_consent';

/**
 * Imposta un cookie nel browser.
 * @param {string} name - Il nome del cookie.
 * @param {string} value - Il valore del cookie.
 * @param {number} days - Il numero di giorni prima della scadenza del cookie.
 */
const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
};

/**
 * Legge il valore di un cookie specifico.
 * @param {string} name - Il nome del cookie da leggere.
 * @returns {string | null} Il valore del cookie o null se non trovato.
 */
const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const CookieService = {
  setCookie,
  getCookie,
};
