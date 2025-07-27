import { useState, useCallback, useRef } from 'react';
import { GeminiService } from '../services/gemini.js';

const INITIAL_MESSAGE = "Ciao! Sono Guida, l'assistente virtuale di MauSé. Posso darti dettagli sui nostri eventi o spiegarti come prenotare. Come posso aiutarti?";
const ERROR_MESSAGE = "Oops! C'è stato un piccolo intoppo. Riprova o contatta direttamente MauSé all'indirizzo info@mausehomerestaurant.com.";

export const useChat = (systemInstruction) => {
    const [messages, setMessages] = useState([{ sender: 'bot', text: INITIAL_MESSAGE }]);
    const [loading, setLoading] = useState(false);
    const chatRef = useRef(null);

    const sendMessage = useCallback(async (messageText) => {
        if (!messageText.trim() || loading) return;
        
        const userMessage = { sender: 'user', text: messageText };
        setMessages(prev => [...prev, userMessage]);
        setLoading(true);

        try {
            // Inizializza la sessione di chat al primo messaggio
            if (!chatRef.current) {
                chatRef.current = GeminiService.createChat(systemInstruction);
            }

            const response = await chatRef.current.sendMessage({ message: messageText });
            const botMessage = { sender: 'bot', text: response.text };
            setMessages(prev => [...prev, botMessage]);

        } catch (error) {
            console.error("Chatbot error:", error);
            const errorMessage = { sender: 'bot', text: ERROR_MESSAGE };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    }, [loading, systemInstruction]);

    return { messages, loading, sendMessage };
};