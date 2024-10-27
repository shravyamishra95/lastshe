const apiKey = "8d9d4aca25056b61f3bf7897980fad2f"; // Replace with your OpenWeatherMap API key
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
  const city = document.getElementById("search").value;
  fetchWeatherData(city);
});

const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error("Error fetching weather data", error);
    alert("Could not find weather data for that city.");
  }
};

const displayWeatherData = (data) => {
  const weatherDescription = data.weather[0].description;
  const windSpeed = data.wind.speed;
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  document.getElementById("description").innerText =
    weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  document.getElementById(
    "windSpeed"
  ).innerText = `Wind Speed: ${windSpeed} m/s`;
  document.getElementById("weatherIcon").src = iconUrl;
};
