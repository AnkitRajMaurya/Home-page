// chatbot.js

function generateBotReply(input) {
  const text = input.toLowerCase();

  const responses = {
    greetings: {
      keywords: ["hi", "hello", "hey", "namaste", "good morning", "good afternoon", "good evening"],
      reply: "Namaste! Kaise madad kar sakta hoon?"
    },
    farewell: {
      keywords: ["bye", "goodbye", "good night", "see you"],
      reply: "Alvida! Aapka din shubh ho!"
    },
    thanks: {
      keywords: ["thanks", "thank you", "shukriya", "dhanyavaad"],
      reply: "Aapka swagat hai!"
    }
  };

  for (const category in responses) {
    const { keywords, reply } = responses[category];
    if (keywords.some(keyword => text.includes(keyword))) {
      return displayBotMessage(reply);
    }
  }

  // Fallback to Google search if no trained response
  fetch(`https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(input)}&key=YOUR_API_KEY&cx=YOUR_SEARCH_ENGINE_ID`)
    .then(res => res.json())
    .then(data => {
      if (data.items && data.items.length > 0) {
        const firstResult = data.items[0];
        displayBotMessage(`${firstResult.title}: <a href="${firstResult.link}" target="_blank">${firstResult.link}</a>`, true);
      } else {
        displayBotMessage("Maaf kijiye, mujhe iska jawab nahi mila.", true);
      }
    })
    .catch(() => displayBotMessage("Maaf kijiye, internet se jawab nahi mil saka.", true));
}
