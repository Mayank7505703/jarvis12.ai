const apiKey = "AIzaSyCp9srKGwHCoWMfiCEPkrqA1XPTMFpodkM";

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,           // FIXED: typo "temprature" → "temperature"
  topP: 0.95,
  topK: 40,
  maxOutputTokens:66,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [], // You can add history messages here if needed
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response;
  const text = await response.text(); // FIXED: Await .text()
  return text;
}

export default run;
