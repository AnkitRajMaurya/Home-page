// weather.js

const weatherTemp = document.getElementById("weather-temp");
const weatherLocation = document.getElementById("weather-location");

// Fixed coordinates for Delhi, India
const delhiCoords = {
  lat: 28.6139,
  lon: 77.2090
};

// OpenWeatherMap API key
const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace this with your real API key

function fetchWeatherForDelhi() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${delhiCoords.lat}&lon=${delhiCoords.lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const temp = Math.round(data.main.temp);
      const city = data.name || "Delhi";

      weatherTemp.textContent = `${temp}°C`;
      weatherLocation.textContent = city;
    })
    .catch((err) => {
      console.error("Weather fetch error:", err);
      weatherTemp.textContent = "--";
      weatherLocation.textContent = "Weather Unavailable";
    });
}

// Initialize on load
window.addEventListener("DOMContentLoaded", fetchWeatherForDelhi);
