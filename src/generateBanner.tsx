import { useState } from 'react';

// Funcție pentru a genera bannerul folosind API-ul OpenAI
export const generateBanner = async (template: string, title: string, description: string) => {
  try {
    // Asigură-te că ai o cheie API validă de la OpenAI
    const apiKey = 'apiKey';

    // Creează un obiect cu datele necesare pentru solicitarea către API
    const requestData = {
      template,
      title,
      description,
    };

    // Adaugă dimensiunea imaginii în funcție de șablon
    const requestDataFromChatGbt = {
      model: 'dall-e-3',
      prompt: requestData.description,
      n: 1,
      size: '1024x1024',
    };

    // Trimite solicitarea către API-ul OpenAI
    const response = await fetch('https://api.openai.com/v1/images/generations?', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestDataFromChatGbt),
    });

    // Verifică dacă răspunsul este de tip JSON și preia datele
    if (response.ok) {
      const data = await response.json();
      // La acest punct, data ar trebui să conțină textul și imaginile generate
      console.log('Banner generat:', data);
      return data;
      // Aici poți actualiza starea aplicației cu datele primite și afișa bannerul în consecință
    } else {
      console.error('Request data:', response);
      console.error('Eroare la generarea bannerului:', response.statusText);
    }
  } catch (error) {
    //console.error('Eroare generală:', error.message);
  }
};
