console.log("connected");
var cityName;
var temp1;
var weatherElement = document.getElementById("weather-box");
var locationElement = document.getElementById("location-box");
api =
  "http://api.openweathermap.org/data/2.5/weather?id=1273294&appid=a3620f6650ae7d3b721fd916be45e214";

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

function displayWeather() {
  weatherElement.innerHTML = Math.floor(temp1 - 273);
  locationElement.innerHTML = cityName;
}

checking my git account;