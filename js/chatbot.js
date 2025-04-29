document.getElementById("send-btn").addEventListener("click", handleMessage);
document.getElementById("user-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") handleMessage();
});

function handleMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("You", message, "user");
  input.value = "";

  getBotReply(message);
}

function appendMessage(sender, text, className) {
  const chatWindow = document.getElementById("chat-window");
  const msg = document.createElement("div");
  msg.className = `message ${className}`;
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getBotReply(userMsg) {
  const msg = userMsg.toLowerCase();

  let reply = "";

  if (["hi", "hello", "hey"].includes(msg)) reply = "Hello Ankit!";
  else if (["good morning", "good night", "good evening", "good afternoon"].includes(msg)) reply = `Good ${msg.split(" ")[1]} to you too!`;
  else if (["bye", "goodbye"].includes(msg)) reply = "Goodbye! Have a great day!";
  else if (["thanks", "thank you"].includes(msg)) reply = "You're welcome!";
  else reply = `Sorry, mujhe iska sahi answer nahi aata. <br><em>by Google</em>: ${simulateGoogleAnswer(userMsg)}`;

  appendMessage("Bot", reply, "bot");
}

function simulateGoogleAnswer(query) {
  return `Result for <strong>${query}</strong>:<br>This is a simulated response based on your query.`;
}
