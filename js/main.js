// main.js

// DOM Elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotButton = document.getElementById("chatbot-send");

// Google Search
searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
  }
});

// Handle Enter Key
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchButton.click();
});
chatbotInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") chatbotButton.click();
});

// Chatbot Send
chatbotButton.addEventListener("click", () => {
  const input = chatbotInput.value.trim();
  if (!input) return;
  displayUserMessage(input);
  generateBotReply(input);
  chatbotInput.value = "";
});

function displayUserMessage(msg) {
  const div = document.createElement("div");
  div.className = "user-message";
  div.textContent = `You: ${msg}`;
  chatbotMessages.appendChild(div);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function displayBotMessage(msg, isGoogle = false) {
  const div = document.createElement("div");
  div.className = "bot-message";
  div.innerHTML = `Bot: ${msg}${isGoogle ? ' <span class="by-google">(by Google)</span>' : ''}`;
  chatbotMessages.appendChild(div);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}
