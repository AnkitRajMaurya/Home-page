const focusInput = document.getElementById('focusInput');
const focusList = document.getElementById('focusList');

focusInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const li = document.createElement('li');
    li.innerText = focusInput.value;
    focusList.appendChild(li);
    focusInput.value = "";
  }
});