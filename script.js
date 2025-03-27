const apiKey = "YOUR_OPENWEATHER_API_KEY"; // Replace with your OpenWeather API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          const temperature = data.main.temp;
          const humidity = data.main.humidity;
          const description = data.weather[0].description;
          const cityName = data.name;

          // Display the weather information
          document.getElementById("cityName").textContent = `Weather in ${cityName}`;
          document.getElementById("temperature").textContent = `Temperature: ${temperature}°C`;
          document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
          document.getElementById("description").textContent = `Condition: ${description}`;
        } else {
          alert("City not found. Please try again.");
        }
      })
      .catch((error) => {
        alert("Error fetching weather data. Please try again.");
        console.error("Error:", error);
      });
  } else {
    alert("Please enter a city name.");
  }
}
