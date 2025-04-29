// js/typewriter.js
document.addEventListener('DOMContentLoaded', function() {
      const typewriterElement = document.getElementById('typewriter');
      const quotes = [
        "Keep pushing your limits.",
        "Code is like humor. When you have to explain it, it’s bad.",
        "First, solve the problem. Then, write the code."
      ];
      let quoteIndex = 0;
      let charIndex = 0;
      
      function type() {
        if (charIndex < quotes[quoteIndex].length) {
          typewriterElement.innerHTML += quotes[quoteIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, 100);
        } else {
          setTimeout(erase, 2000);
        }