import { jsx, jsxs } from 'react/jsx-runtime';

export const Footer = ({ onOpenCookieSettings }) => (
  jsx("footer", { 
    className: "main-footer",
    children: jsxs("div", { 
      className: "container",
      children: [
        jsxs("p", { children: ["© ", new Date().getFullYear(), " MauSé. Tutti i diritti riservati."] }),
        jsxs("div", {
          className: "footer-links",
          children: [
            jsx("button", { onClick: onOpenCookieSettings, children: "Impostazioni Cookie" }),
          ]
        })
      ]
    })
  })
);