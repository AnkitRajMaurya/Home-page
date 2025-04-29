const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "Experience is the name everyone gives to their mistakes.",
  "In order to be irreplaceable, one must always be different.",
  "First, solve the problem. Then, write the code."
];

document.getElementById('quoteText').innerText = quotes[Math.floor(Math.random() * quotes.length)];