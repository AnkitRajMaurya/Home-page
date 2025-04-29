const apiKey = "YOUR_OPENWEATHER_API_KEY"; // Replace your key
navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('weatherInfo').innerText = `${data.name}: ${data.main.temp}°C, ${data.weather[0].main}`;
    })
    .catch(err => {
      document.getElementById('weatherInfo').innerText = "Weather Unavailable";
    });
});