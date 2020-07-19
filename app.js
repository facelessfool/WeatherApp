console.log("connected");
var cityName = "New York";
var country = "US";
var temp1;
var cityElement = document.getElementById("city-box");
var weatherElement = document.getElementById("weather-box");
var locationElement = document.getElementById("location-box");
const apiKey = "a3620f6650ae7d3b721fd916be45e214";
var dateElement = document.querySelector(".date");

findTemp(cityName);

function findTemp(cityName) {
  api = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a3620f6650ae7d3b721fd916be45e214`;

  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      temp1 = data.main.temp;
      cityName = data.name;
      country = data.sys.country;
      // weatherIcon = data.weather[0].icon;

      console.log(temp1);
    })
    .then(function () {
      displayWeather();
    })
    .catch(function () {
      alert("enter a valid city");
    });
}

cityElement.addEventListener("keypress", check);
function check(event) {
  if (event.keyCode == 13) {
    console.log(cityElement.value);
    cityName = cityElement.value;
    findTemp(cityName);
  }
}

function displayWeather() {
  // <div id="weather-box">-- <span>°</span></div>
  var tempCel = Math.floor(temp1 - 273);
  weatherElement.innerText = tempCel + "°C";
  locationElement.innerText =
    cityName.charAt(0).toUpperCase() + cityName.slice(1) + ", " + country;
}
