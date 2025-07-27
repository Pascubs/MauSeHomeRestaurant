import { useState, useEffect } from 'react';
import { GeminiService } from '../services/gemini.js';

export const useTagline = () => {
  const [tagline, setTagline] = useState('Un momento di gusto e arte.');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTagline = async () => {
      try {
        setLoading(true);
        setError('');
        const generatedTagline = await GeminiService.generateTagline();
        setTagline(generatedTagline);
      } catch (e) {
        console.error("Error generating tagline:", e);
        // Fornisce un messaggio di errore più generico all'utente
        setError('Servizio AI non disponibile. Riprova più tardi.');
      } finally {
        setLoading(false);
      }
    };
    fetchTagline();
  }, []);

  return { tagline, loading, error };
};
