import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { useChat } from '../../hooks/useChat.js';

const CHATBOT_SYSTEM_INSTRUCTION = `Sei "Guida", l'assistente virtuale amichevole e accogliente di MauSé. Il tuo scopo è aiutare gli utenti a conoscere il locale e a prenotare.

**Informazioni sugli eventi:**
Attualmente **non ci sono eventi in programma**. Invitiamo gli utenti a seguirci sui nostri canali social per rimanere aggiornati sugli annunci futuri.

**Dove ci troviamo:**
Puoi trovarci a questo indirizzo. Clicca sul link per ottenere le indicazioni stradali su Google Maps:
- **Indirizzo**: **https://maps.app.goo.gl/juRt3m9L7kYp1G98A**

**I nostri canali social:**
- **Facebook**: https://www.facebook.com/solelunahomerestaurant/
- **Instagram**: https://www.instagram.com/soleluna_homerestaurant/
Se un utente chiede i nostri social, forniscigli questi link.

**Come prenotare:**
Le prenotazioni si effettuano **esclusivamente** tramite:
- Email: **info@mausehomerestaurant.com**
- Telefono: **+39 392 215 1495**
Non puoi prendere prenotazioni direttamente.

**Stile di conversazione:**
Sii sempre cortese, chiaro e conciso. **Importante**: la conversazione è già iniziata, quindi vai dritto al punto nelle tue risposte senza aggiungere ulteriori saluti o presentazioni.
Per la formattazione:
1. Usa ritorni a capo standard per separare i paragrafi o creare elenchi. **Non** scrivere la stringa letterale "\\\\n".
2. **Metti sempre in grassetto le informazioni chiave** usando la sintassi Markdown \`**testo**\`. Questo include indirizzi email, numeri di telefono e link, per renderli più visibili.

Se non conosci una risposta, indirizza l'utente a contattare direttamente MauSé tramite i contatti forniti.

**Regole e Limitazioni FONDAMENTALI:**
1. Il tuo unico scopo è rispondere a domande relative a MauSé (prenotazioni, concept, social, posizione).
2. Se un utente ti fa una domanda non pertinente (es. "qual è la capitale della Francia?", "raccontami una barzelletta", "dammi una ricetta per la carbonara"), DEVI RIFIUTARE GENTILMENTE di rispondere.
3. Usa una frase come: "Mi dispiace, ma il mio ruolo è fornire informazioni specifiche su MauSé. Posso aiutarti con le modalità di prenotazione o parlarti del nostro concept?" per riportare la conversazione in argomento.
4. NON inventare mai informazioni. Se non conosci la risposta a una domanda su MauSé, indirizza l'utente ai contatti ufficiali.`;

export const Chatbot = ({ isOpen, onToggle }) => {
  const { messages, loading, sendMessage } = useChat(CHATBOT_SYSTEM_INSTRUCTION);
  const [input, setInput] = useState('');
  const [showCallout, setShowCallout] = useState(false);
  const messagesEndRef = useRef(null);

  // Show callout after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
        if (!isOpen) {
            setShowCallout(true);
        }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleToggle = () => {
    if (!isOpen) {
        setShowCallout(false);
    }
    onToggle();
  };
  
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    sendMessage(input);
    setInput('');
  };
  
  const formatResponse = (text) => {
    // Regex to find URLs and convert them to clickable links.
    const urlRegex = /(https?:\/\/[^\s<]+)/g;

    // L'ordine di sostituzione è critico per evitare di generare HTML non valido.
    // 1. Applica prima la formattazione del grassetto.
    // 2. Successivamente, converti gli URL in link.
    // Questo previene conflitti dove la creazione del link potrebbe interferire con il markdown del grassetto.
    return text
      // Processa prima il markdown per il testo in grassetto.
      .replace(/\*\*([\s\S]*?)\*\*/g, '<strong>$1</strong>')
      // Poi, converte gli URL in tag 'a' cliccabili.
      .replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>')
      // Infine, gestisce i ritorni a capo.
      .replace(/\\n|\n/g, '<br />');
  };

  return (
    jsxs(Fragment, {
      children: [
        jsx("button", { 
          className: "chat-fab", 
          onClick: handleToggle, 
          "aria-label": isOpen ? 'Chiudi chat' : 'Apri chat',
          children: isOpen ? 
            jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", width: "28", height: "28", children: jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" }) }) :
            jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", width: "28", height: "28", children: jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" }) })
        }),
        showCallout && !isOpen && jsx("div", { className: "chat-callout", children: "Ciao! Hai domande?" }),
        jsxs("div", { 
          className: `chat-window ${isOpen ? 'open' : ''}`,
          children: [
            jsxs("div", { 
              className: "chat-header",
              children: [
                jsx("h3", { children: "La tua Guida MauSé" }),
                jsx("button", { onClick: handleToggle, "aria-label": "Chiudi chat", children: "×" })
              ]
            }),
            jsxs("div", { 
              className: "chat-messages",
              children: [
                messages.map((msg, index) => (
                  jsx("div", { 
                    className: `message ${msg.sender}`,
                    children: jsx("p", { dangerouslySetInnerHTML: { __html: formatResponse(msg.text) } })
                  }, index)
                )),
                loading && (
                  jsx("div", { 
                    className: "message bot",
                    children: jsxs("div", { 
                      className: "typing-indicator",
                      children: [
                        jsx("span", {}),
                        jsx("span", {}),
                        jsx("span", {})
                      ]
                    })
                  })
                ),
                jsx("div", { ref: messagesEndRef })
              ]
            }),
            jsxs("form", { 
              className: "chat-input", 
              onSubmit: handleSendMessage,
              children: [
                jsx("input", { 
                  type: "text",
                  value: input,
                  onChange: (e) => setInput(e.target.value),
                  placeholder: "Scrivi un messaggio...",
                  "aria-label": "Messaggio per il chatbot",
                  disabled: loading
                }),
                jsx("button", { 
                  type: "submit", 
                  disabled: !input.trim() || loading, 
                  "aria-label": "Invia messaggio",
                  children: jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", width: "24", height: "24", children: jsx("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" }) })
                })
              ]
            })
          ]
        })
      ]
    })
  );
};