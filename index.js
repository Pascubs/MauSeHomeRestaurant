/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { jsx } from 'react/jsx-runtime';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './src/App.js';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Elemento root non trovato. Assicurarsi che ci sia un div con id='root' nel tuo HTML.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  jsx(StrictMode, {
    children: jsx(App, {})
  })
);