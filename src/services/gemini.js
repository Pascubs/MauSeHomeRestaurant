import { GoogleGenAI, Type } from '@google/genai';
import { API_KEY } from '../config/apiKey.js';

// Legge la chiave API dal file di configurazione.
const apiKey = API_KEY;

// Controlla se la chiave API è un placeholder o non è stata inserita.
const isApiKeyPlaceholder = !apiKey || apiKey === "INSERISCI_QUI_LA_TUA_API_KEY";

// Il servizio è considerato disponibile solo se la chiave è stata configurata.
export const isServiceAvailable = !isApiKeyPlaceholder;

let ai;
if (isServiceAvailable) {
  ai = new GoogleGenAI({ apiKey });
} else {
  console.warn("API Key di Gemini non trovata o non configurata in 'src/config/apiKey.js'. I servizi AI saranno disabilitati. Assicurati di inserire una chiave valida.");
}

const generateTagline = async () => {
  if (!isServiceAvailable) {
    throw new Error('Servizio AI non configurato: API Key mancante o non valida.');
  }

  try {
    const prompt = "Crea una tagline per un home restaurant italiano chiamato 'MauSé' che unisce arte e cucina. La tagline deve essere breve (massimo 10 parole), poetica ed elegante. Deve evocare un'esperienza unica e raffinata. Non usare virgolette.";
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            tagline: {
              type: Type.STRING,
              description: "La tagline generata per il ristorante."
            }
          },
          required: ["tagline"]
        }
      }
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText);

    if (result && typeof result.tagline === 'string') {
      return result.tagline;
    }
    throw new Error('La risposta del servizio AI era vuota o malformata.');

  } catch (error) {
    console.error('Errore durante la generazione della tagline con Gemini:', error);
    throw new Error('Errore durante la comunicazione con il servizio AI.');
  }
};

/**
 * Crea una nuova sessione di chat con le istruzioni di sistema fornite.
 * @param {string} systemInstruction - Le istruzioni per il modello.
 * @returns {import("@google/genai").Chat} Un'istanza di Chat.
 */
const createChat = (systemInstruction) => {
  if (!isServiceAvailable) {
    throw new Error('Servizio AI non configurato: API Key mancante o non valida.');
  }
  const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: systemInstruction,
    },
  });
  return chat;
};


export const GeminiService = {
  generateTagline,
  createChat,
};
