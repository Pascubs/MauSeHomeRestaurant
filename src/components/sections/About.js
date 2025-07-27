import { jsx, jsxs } from 'react/jsx-runtime';

export const About = () => (
  jsx("section", { 
    id: "about", 
    className: "content-section",
    children: jsx("div", { 
      className: "container",
      children: jsxs("div", { 
        className: "grid-2",
        children: [
          jsxs("div", { 
            children: [
              jsx("h2", { children: "La Nostra Filosofia" }),
              jsx("p", { children: "MauSé non è solo un home restaurant, è un'idea. È la convinzione che il buon cibo e la bellezza dell'arte possano creare momenti di pura felicità. Selezioniamo ingredienti locali con cura maniacale e li trasformiamo in piatti che raccontano una storia, serviti in un ambiente dove ogni dettaglio è un'opera d'arte." }),
              jsx("p", { children: "Crediamo nella condivisione, nella creatività e nell'importanza di uno spazio che sappia essere sia un rifugio che una fonte di ispirazione." })
            ]
          }),
          jsx("img", { src: "/public/images/about-philosophy.jpg?v=1.2", alt: "Chef che prepara un piatto con cura" })
        ]
      })
    })
  })
);