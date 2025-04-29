document.addEventListener('DOMContentLoaded', function() {
  const greeting = document.getElementById('greeting');
  const now = new Date();
  const hour = now.getHours();
  let message = '';
  
  if (hour >= 5 && hour < 12) {
    message = 'Good Morning, Ankit Raj!';
  } else if (hour >= 12 && hour < 17) {
    message = 'Good Afternoon, Ankit Raj!';
  } else if (hour >= 17 && hour < 21) {
    message = 'Good Evening, Ankit Raj!';
  } else {
    message = 'Good Night, Ankit Raj!';
  }
  
  greeting.textContent = message;
});