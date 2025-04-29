// weather.js

const weatherSection = document.getElementById("weather");
const weatherIcon = document.getElementById("weather-icon");
const weatherTemp = document.getElementById("weather-temp");
const weatherLocation = document.getElementById("weather-location");

// OpenWeatherMap API key
const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your actual key

function fetchWeatherByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const iconCode = data.weather[0].icon;
      const temp = Math.round(data.main.temp);
      const city = data.name;

      weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      weatherTemp.textContent = `${temp}°C`;
      weatherLocation.textContent = city;
    })
    .catch((err) => {
      console.error("Weather error:", err);
      showWeatherUnavailable();
    });
}

function showWeatherUnavailable() {
  weatherIcon.src = "images/icons/cloud-off.png"; // Optional fallback icon
  weatherTemp.textContent = "--";
  weatherLocation.textContent = "Weather Unavailable";
}

function initWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
      },
      (err) => {
        console.warn("Location error:", err);
        showWeatherUnavailable();
      }
    );
  } else {
    showWeatherUnavailable();
  }
}

// Initialize weather on load
window.addEventListener("DOMContentLoaded", initWeather);
