import { jsx, jsxs } from 'react/jsx-runtime';
import { FacebookIcon, InstagramIcon } from '../common/SocialIcons.js';

export const Contact = () => (
  jsx("section", { 
    id: "contact", 
    className: "content-section",
    children: jsxs("div", { 
      className: "container",
      children: [
        jsx("h2", { children: "Contattaci e Prenota" }),
        jsx("p", { children: "Per prenotare un tavolo o chiedere informazioni, non esitare a contattarci tramite i nostri recapiti o seguici sui social." }),
        jsxs("div", { 
          className: "contact-details",
          children: [
            jsxs("address", { 
              children: [
                "Email: ", 
                jsx("a", { href: "mailto:info@mausehomerestaurant.com", children: "info@mausehomerestaurant.com" }),
                jsx("br", {}),
                "Telefono: ", 
                jsx("a", { href: "tel:+393922151495", children: "+39 392 215 1495" })
              ]
            }),
            jsxs("div", { 
              className: "social-links",
              children: [
                jsx("a", { 
                  href: "https://www.facebook.com/solelunahomerestaurant/", 
                  target: "_blank", 
                  rel: "noopener noreferrer", 
                  "aria-label": "Seguici su Facebook",
                  children: jsx(FacebookIcon, {})
                }),
                jsx("a", { 
                  href: "https://www.instagram.com/soleluna_homerestaurant/", 
                  target: "_blank", 
                  rel: "noopener noreferrer", 
                  "aria-label": "Seguici su Instagram",
                  children: jsx(InstagramIcon, {})
                })
              ]
            })
          ]
        })
      ]
    })
  })
);
