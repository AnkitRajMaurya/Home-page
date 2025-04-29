// Greeting based on time
const now = new Date();
const hour = now.getHours();
let greetMsg = "Good Day";

if (hour < 12) greetMsg = "Good Morning";
else if (hour < 17) greetMsg = "Good Afternoon";
else if (hour < 21) greetMsg = "Good Evening";
else greetMsg = "Good Night";

document.getElementById('greeting').innerText = greetMsg;

// Google Search
document.getElementById('searchBtn').addEventListener('click', () => {
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  }
});

// AI Assistant Chat
document.getElementById('sendBtn').addEventListener('click', () => {
  const input = document.getElementById('userInput').value.trim();
  if (!input) return;
  
  const chatMessages = document.getElementById('chatMessages');
  chatMessages.innerHTML += `<div class="user">You: ${input}</div>`;
  
  let botReply = "";
  
  if (input.toLowerCase().includes('hello')) {
    botReply = "Bot: Hello! How can I assist you today?";
  } else if (input.toLowerCase().includes('weather')) {
    botReply = "Bot: Weather info is above!";
  } else if (input.toLowerCase().includes('crypto')) {
    botReply = "Bot: Crypto prices updated above!";
  } else {
    botReply = "Bot: Sorry, mujhe iska sahi answer nahi aata, Google search use karo!";
  }
  
  chatMessages.innerHTML += `<div class="bot">${botReply}</div>`;
  document.getElementById('userInput').value = "";
});