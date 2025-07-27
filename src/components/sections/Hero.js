import { jsx, jsxs } from 'react/jsx-runtime';
import { Spinner } from '../common/Spinner.js';

export const Hero = ({ tagline, loading, error }) => (
  jsx("section", { 
    id: "hero", 
    className: "hero",
    children: jsxs("div", { 
      className: "container hero-content",
      children: [
        jsx("h1", { children: "MauSé" }),
        jsx("p", { className: "hero-intro", children: "Dove l'arte incontra la cucina. Un'esperienza che nutre l'anima e il palato, in uno spazio che ispira creatività e connessione." }),
        loading && jsx(Spinner, {}),
        error && jsx("p", { className: "tagline", role: "alert", children: error }),
        !loading && !error && jsx("p", { className: "tagline", children: tagline }),
        jsx("a", { 
          href: "#events", 
          className: "btn", 
          onClick: (e) => {
            e.preventDefault();
            document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
          },
          children: "Scopri gli Eventi"
        })
      ]
    })
  })
);
