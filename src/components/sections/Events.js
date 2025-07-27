import { jsx, jsxs } from 'react/jsx-runtime';
import { FacebookIcon, InstagramIcon } from '../common/SocialIcons.js';

export const Events = () => {
    return (
        jsx("section", { 
            id: "events", 
            className: "content-section",
            children: jsxs("div", { 
                className: "container",
                children: [
                    jsx("h2", { children: "Eventi" }),
                    jsxs("div", { 
                        className: "no-events-placeholder",
                        children: [
                            jsx("p", { children: "Al momento non ci sono eventi in programma." }),
                            jsx("p", { children: "Seguici sui nostri canali social per rimanere aggiornato sui prossimi appuntamenti!" }),
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
};
