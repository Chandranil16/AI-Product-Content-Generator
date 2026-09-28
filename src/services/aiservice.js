import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const generateProductDetails = async (productName, category) => {
  const prompt = `
Generate marketing content for the following product.

Product Name: ${productName}
Category: ${category}

Return ONLY a JSON object with exactly these fields:

{
  "title": "string",
  "description": "string",
  "keywords": ["string", "string", "string", "string", "string"]
}

Requirements:
- Create an attractive and concise product title.
- Write a short 2-3 sentence e-commerce description.
- Generate exactly 5 relevant keywords.
- Base the content only on the product name and category.
- Do not invent specific technical specifications,
  certifications, prices, measurements, performance claims,
  or features that were not provided.
- Do not use Markdown.
- Do not add any text outside the JSON object.
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
    },
  });

  const result = JSON.parse(response.text);

  return {
    ...result,
    category,
  };
};
