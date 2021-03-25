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
        console.log(data.name);
        document.getElementById("cityName").innerHTML = data.name;
        console.log(data.daily[0].weather[0].main);
        document.getElementById("dailyForecastWeatherStatus").innerHTML =
          data.daily[0].weather[0].main;
        console.log(data.daily[0].temp);
        document.getElementById("dailyForecastWeatherHumidity").innerHTML =
          data.daily[0].humidity;
        console.log(data.daily[0].humidity);
        document.getElementById("dailyForecastWeatherTemp").innerHTML =
          data.daily[0].temp.day;
        console.log(data.daily[0].temp.day);
        document.getElementById("dailyForecastWeatherSpeed").innerHTML =
          data.daily[0].wind_speed;
        console.log(data.daily[0].wind_speed);
        console.log(data.name);
        document.getElementById("cityName2").innerHTML = data.name;
        console.log(data.daily[1].weather[0].main);
        document.getElementById("dailyForecast2WeatherStatus").innerHTML =
          data.daily[1].weather[0].main;
        console.log(data.daily[1].temp);
        document.getElementById("dailyForecast2WeatherHumidity").innerHTML =
          data.daily[1].humidity;
        console.log(data.daily[1].humidity);
        document.getElementById("dailyForecast2WeatherTemp").innerHTML =
          data.daily[1].temp.day;
        console.log(data.daily[1].temp.day);
        document.getElementById("dailyForecast2WeatherSpeed").innerHTML =
          data.daily[1].wind_speed;
        console.log(data.daily[1].wind_speed);
        console.log(data.name);
        document.getElementById("cityName3").innerHTML = data.name;
        console.log(data.daily[2].weather[0].main);
        document.getElementById("dailyForecast3WeatherStatus").innerHTML =
          data.daily[2].weather[0].main;
        console.log(data.daily[2].temp);
        document.getElementById("dailyForecast3WeatherHumidity").innerHTML =
          data.daily[2].humidity;
        console.log(data.daily[2].humidity);
        document.getElementById("dailyForecast3WeatherTemp").innerHTML =
          data.daily[2].temp.day;
        console.log(data.daily[2].temp.day);
        document.getElementById("dailyForecast3WeatherSpeed").innerHTML =
          data.daily[2].wind_speed;
        console.log(data.daily[2].wind_speed);
        console.log(data.name);
        document.getElementById("cityName4").innerHTML = data.name;
        console.log(data.daily[3].weather[0].main);
        document.getElementById("dailyForecast4WeatherStatus").innerHTML =
          data.daily[3].weather[0].main;
        console.log(data.daily[3].temp);
        document.getElementById("dailyForecast4WeatherHumidity").innerHTML =
          data.daily[3].humidity;
        console.log(data.daily[3].humidity);
        document.getElementById("dailyForecast4WeatherTemp").innerHTML =
          data.daily[3].temp.day;
        console.log(data.daily[3].temp.day);
        document.getElementById("dailyForecast4WeatherSpeed").innerHTML =
          data.daily[3].wind_speed;
        console.log(data.daily[3].wind_speed);
        console.log(data.name);
        document.getElementById("cityName5").innerHTML = data.name;
        console.log(data.daily[4].weather[0].main);
        document.getElementById("dailyForecast5WeatherStatus").innerHTML =
          data.daily[4].weather[0].main;
        console.log(data.daily[4].temp);
        document.getElementById("dailyForecast5WeatherHumidity").innerHTML =
          data.daily[4].humidity;
        console.log(data.daily[4].humidity);
        document.getElementById("dailyForecast5WeatherTemp").innerHTML =
          data.daily[4].temp.day;
        console.log(data.daily[4].temp.day);
        document.getElementById("dailyForecast5WeatherSpeed").innerHTML =
          data.daily[4].wind_speed;
        console.log(data.daily[4].wind_speed);
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
