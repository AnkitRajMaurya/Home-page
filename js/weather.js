const weatherApiKey = "YOUR_API_KEY"; // Replace with your actual API key
const city = "Delhi";
const countryCode = "IN";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${weatherApiKey}&units=metric`;

function fetchWeather() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.main) {
        document.getElementById("weather-temp").textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById("weather-location").textContent = `${data.name}, ${data.sys.country}`;
      } else {
        document.getElementById("weather-location").textContent = "Weather unavailable";
      }
    })
    .catch(() => {
      document.getElementById("weather-location").textContent = "Weather unavailable";
    });
}

window.addEventListener("DOMContentLoaded", fetchWeather);
