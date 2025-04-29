// chatbot.js

const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");

// Bot ka basic trained reply set
const botReplies = {
    "hello": "Hi there! How can I assist you today?",
    "hi": "Hello! How can I help you?",
    "who are you": "I'm your personal AI Assistant created by Ankit Raj!",
    "what is your name": "I'm Hyper Coder Bot.",
    "how are you": "I'm always operational and ready to help!",
    "good morning": "Good Morning! Wishing you a productive day.",
    "good afternoon": "Good Afternoon! Keep coding!",
    "good evening": "Good Evening! Hope you had a great day.",
    "good night": "Good Night! Sleep well.",
    "thank you": "You're welcome!",
    "thanks": "Always here for you!"
};

// Function to detect language (very simple)
function detectLanguage(text) {
    const hindiWords = ["kaise", "kya", "kaun", "tum", "acha", "shukriya"];
    for (let word of hindiWords) {
        if (text.includes(word)) return "hindi";
    }
    return "english";
}

// Bot ka jawaab dena
function getBotReply(userInput) {
    userInput = userInput.toLowerCase().trim();
    let reply = "Sorry, I don't know this yet. Searching on Google...";
    
    for (let key in botReplies) {
        if (userInput.includes(key)) {
            reply = botReplies[key];
            break;
        }
    }
    return reply;
}

// Google search result fetch function
async function fetchGoogleSearch(query) {
    const searchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    const response = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`);
    const data = await response.json();
    const result = data.RelatedTopics ? data.RelatedTopics[0].Text : "Sorry, no results found.";
    
    return result;
}

// Message append karna
function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender);
    messageElement.innerText = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send button click
sendButton.addEventListener("click", sendMessage);

// Enter key se message bhejna
chatInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Send message main function
async function sendMessage() {
    const userInput = chatInput.value.trim();
    if (userInput === "") return;
    
    appendMessage("user", "You: " + userInput);
    
    const language = detectLanguage(userInput);
    let botResponse = getBotReply(userInput);
    
    // Agar bot ka reply nahi mila to google search
    if (botResponse.includes("Searching on Google")) {
        appendMessage("bot", "Please wait... Searching on Google...");
        
        // Search on Google or DuckDuckGo
        const searchResult = await fetchGoogleSearch(userInput);
        appendMessage("bot", `I found this: ${searchResult}`);
    } else {
        if (language === "hindi") {
            // Simple Hindi translation logic
            botResponse = "उत्तर: " + botResponse;
        }
        appendMessage("bot", botResponse);
    }
    
    chatInput.value = "";
}