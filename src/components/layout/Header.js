import { jsx, jsxs } from 'react/jsx-runtime';

export const Header = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    jsx("header", { 
      className: "main-header",
      children: jsxs("div", { 
        className: "container",
        children: [
          jsx("a", { 
            href: "#hero", 
            className: "logo", 
            onClick: (e) => handleNavClick(e, 'hero'),
            "aria-label": "Homepage MauSé",
            children: jsx("img", { src: "/public/images/logo.png", alt: "Logo MauSé" }) 
          }),
          jsx("nav", { 
            className: "main-nav",
            children: jsx("ul", { 
              children: [
                jsx("li", { children: jsx("a", { href: "#about", onClick: (e) => handleNavClick(e, 'about'), children: "Chi Siamo" }) }),
                jsx("li", { children: jsx("a", { href: "#gallery", onClick: (e) => handleNavClick(e, 'gallery'), children: "Galleria" }) }),
                jsx("li", { children: jsx("a", { href: "#events", onClick: (e) => handleNavClick(e, 'events'), children: "Eventi" }) }),
                jsx("li", { children: jsx("a", { href: "#contact", onClick: (e) => handleNavClick(e, 'contact'), children: "Contatti" }) })
              ]
            })
          })
        ]
      })
    })
  );
};