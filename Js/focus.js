// js/focus.js
const focusButton = document.getElementById('focus-mode');

focusButton.addEventListener('click', function() {
    document.querySelector('header').style.display = 'none';
    document.querySelector('.widgets').style.display = 'none';
    document.getElementById('chatbot').style.display = 'none';
    focusButton.style.display = 'none';
    showToast('Focus Mode Activated!');
});