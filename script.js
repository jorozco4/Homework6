let locationNameEl = document.querySelector("#location-name");
let userFormEl = document.querySelector("#location-form");
var repoContainerEl = document.querySelector("#repos-container");
let apiKey = "&appid=d188ffbb66b24c8f611e3a8657818cd6";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
let apiUrlForecast = "https://api.openweathermap.org/data/2.5/onecall";
let forecastExclusion = "&exclude=current,minutely,hourly,alerts";

//This is triggered when the user hits submit
let formSubmitHandler = function (event) {
  event.preventDefault();
  let cityName = locationNameEl.value.trim();

  if (cityName) {
    getUserRepos(cityName);
  }
};

userFormEl.addEventListener("submit", formSubmitHandler);

let buttonClickHandler = function (event) {
  language = event.target.getAttribute("data-language");

  if (language) {
    getFeaturedRepos(language);

    repoContainerEl.textContent = "";
  }
};

let getForecastWeather = function (lat, lon) {
  fetch(
    apiUrlForecast + "?lat=" + lat + "&lon=" + lon + forecastExclusion + apiKey
  ).then(function (response) {
    if (response.ok) {
      console.log("forecast response", response);
      response.json().then(function (data) {
        console.log(data);
      });
    }
  });
};

let getUserRepos = function (city) {
  fetch(apiUrl + city + apiKey).then(function (response) {
    if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        console.log(data);
        console.log(data.name);
        document.getElementById("currentCityName").innerHTML = data.name;
        console.log(data.weather[0].main);
        document.getElementById("weatherStatus").innerHTML =
          data.weather[0].main;
        console.log(data.temp);
        document.getElementById("weatherHumidity").innerHTML =
          data.main.humidity;
        console.log(data.main.humidity);
        document.getElementById("weatherTemp").innerHTML = data.main.temp;
        console.log(data.main.temp);
        document.getElementById("weatherSpeed").innerHTML = data.wind.speed;
        console.log(data.wind.speed);
        getForecastWeather(data.coord.lat, data.coord.lon);
      });
    }
  });
};
