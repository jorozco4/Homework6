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
//This pulls the api response to the console.
let getForecastWeather = function (lat, lon) {
  fetch(
    apiUrlForecast + "?lat=" + lat + "&lon=" + lon + forecastExclusion + apiKey
  ).then(function (response) {
    if (response.ok) {
      console.log("forecast response", response);
      response.json().then(function (data) {
        console.log(data);
        console.log(data.name);
        //This calls each day with the time and forcast
        document.getElementById("forecast1day").innerHTML = moment(
          data.daily[0].dt * 1000
        ).format("MMMM Do YYYY");

        document.getElementById("dailyForecastWeatherStatus").innerHTML =
          data.daily[0].weather[0].main;

        document.getElementById("dailyForecastWeatherHumidity").innerHTML =
          data.daily[0].humidity;

        document.getElementById("dailyForecastWeatherTemp").innerHTML =
          data.daily[0].temp.day;

        document.getElementById("dailyForecastWeatherSpeed").innerHTML =
          data.daily[0].wind_speed;

        document.getElementById("forecast2day").innerHTML = moment(
          data.daily[1].dt * 1000
        ).format("MMMM Do YYYY");

        document.getElementById("dailyForecast2WeatherStatus").innerHTML =
          data.daily[1].weather[0].main;

        document.getElementById("dailyForecast2WeatherHumidity").innerHTML =
          data.daily[1].humidity;

        document.getElementById("dailyForecast2WeatherTemp").innerHTML =
          data.daily[1].temp.day;

        document.getElementById("dailyForecast2WeatherSpeed").innerHTML =
          data.daily[1].wind_speed;

        document.getElementById("forecast3day").innerHTML = moment(
          data.daily[2].dt * 1000
        ).format("MMMM Do YYYY");

        document.getElementById("dailyForecast3WeatherStatus").innerHTML =
          data.daily[2].weather[0].main;

        document.getElementById("dailyForecast3WeatherHumidity").innerHTML =
          data.daily[2].humidity;

        document.getElementById("dailyForecast3WeatherTemp").innerHTML =
          data.daily[2].temp.day;

        document.getElementById("dailyForecast3WeatherSpeed").innerHTML =
          data.daily[2].wind_speed;

        document.getElementById("forecast4day").innerHTML = moment(
          data.daily[3].dt * 1000
        ).format("MMMM Do YYYY");

        document.getElementById("dailyForecast4WeatherStatus").innerHTML =
          data.daily[3].weather[0].main;

        document.getElementById("dailyForecast4WeatherHumidity").innerHTML =
          data.daily[3].humidity;

        document.getElementById("dailyForecast4WeatherTemp").innerHTML =
          data.daily[3].temp.day;

        document.getElementById("dailyForecast4WeatherSpeed").innerHTML =
          data.daily[3].wind_speed;

        document.getElementById("forecast5day").innerHTML = moment(
          data.daily[4].dt * 1000
        ).format("MMMM Do YYYY");

        document.getElementById("dailyForecast5WeatherStatus").innerHTML =
          data.daily[4].weather[0].main;

        document.getElementById("dailyForecast5WeatherHumidity").innerHTML =
          data.daily[4].humidity;

        document.getElementById("dailyForecast5WeatherTemp").innerHTML =
          data.daily[4].temp.day;

        document.getElementById("dailyForecast5WeatherSpeed").innerHTML =
          data.daily[4].wind_speed;
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
