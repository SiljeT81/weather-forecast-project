function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperatureNow");

  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "ffa664a53tdd3f1cb07eo89b459ff47a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function changeCityName(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", changeCityName);

searchCity("London");
