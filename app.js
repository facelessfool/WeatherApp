console.log("connected");
var cityName = "New York";
var temp1;
var cityElement = document.getElementById("city-box");
var weatherElement = document.getElementById("weather-box");
var locationElement = document.getElementById("location-box");
const apiKey = "a3620f6650ae7d3b721fd916be45e214";

cityElement.addEventListener("keypress", check);
function check(event) {
  if (event.keyCode == 13) {
    console.log(cityElement.value);
    cityName = cityElement.value;
    findTemp(cityName);
  }
}

function findTemp(cityName) {
  api = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a3620f6650ae7d3b721fd916be45e214`;

  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      temp1 = data.main.temp;
      cityName = data.name;

      console.log(temp1);
    })
    .then(function () {
      displayWeather();
    });
}

function displayWeather() {
  // <div id="weather-box">-- <span>°</span></div>
  weatherElement.innerText = Math.floor(temp1 - 273) + "°C";
  locationElement.innerText = cityName;
}
