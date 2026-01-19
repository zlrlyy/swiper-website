
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateWorldInsight = async (topic: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a mystical sage in the game world of 'Mythos: Eternal Winds'. 
      Write a short, poetic lore snippet (max 100 words) about ${topic}. 
      Use an epic, cinematic tone.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });
    return response.text || "The winds whisper of secrets yet to be revealed...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The stars are occluded. Try again later, traveler.";
  }
};

export const getCharacterInsights = async (charName: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Describe a secret personality trait or back-story detail for the character '${charName}' in a dark fantasy setting.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            secretTrait: { type: Type.STRING },
            backstorySnippet: { type: Type.STRING },
            motivation: { type: Type.STRING }
          },
          required: ["secretTrait", "backstorySnippet", "motivation"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    return {
      secretTrait: "Unknown",
      backstorySnippet: "His past is lost to time.",
      motivation: "Survival"
    };
  }
};
