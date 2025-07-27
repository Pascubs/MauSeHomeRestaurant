import { jsx, jsxs } from 'react/jsx-runtime';
import { galleryImages } from '../../data/gallery.js';

export const Gallery = () => (
  jsx("section", { 
    id: "gallery", 
    className: "content-section",
    children: jsxs("div", { 
      className: "container",
      children: [
        jsx("h2", { children: "Galleria" }),
        jsx("div", { 
          className: "gallery-grid",
          children: galleryImages.map(img => jsx("img", { src: img.src, alt: img.alt }, img.id))
        })
      ]
    })
  })
);