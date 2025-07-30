const weatherApi = {
  key: "828cc99e0335c9476a8f751b7c386d9a",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

const loc = document.querySelector("#location");
const tempC = document.querySelector(".c");
const tempF = document.querySelector(".f");
const desc = document.querySelector(".desc");
let dat, lat, long;

window.addEventListener("load", () => {
  fetch(base)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { temp, feels_like } = data.main;
      const place = data.name;
      const { description, icon } = data.weather[0];

      const fahrenheit = (temp * 9) / 5 + 32;

      // Interacting with DOM to show data
      loc.textContent = `${place}`;
      desc.textContent = `${description}`;
      tempC.textContent = `${temp.toFixed(2)} °C`;
      tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
    });
});

const searchInputBox = document.getElementById("input-box");

searchInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector(".weather-body").style.display = "block";
  }
});

function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then((data) => {
      showWeatherReport(data);
      lat = data.coord.lat;
      long = data.coord.lon;
      fetching();
    });
}

function showWeatherReport(weather) {
  console.log(weather);

  let city = document.getElementById("city");
  city.innerText = `${weather.name},${weather.sys.country}`;

  let temperature = document.getElementById("temp");
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let minMaxTemp = document.getElementById("min-max");
  minMaxTemp.innerHTML = `${Math.floor(
    weather.main.temp_min
  )}&deg;C (min) / ${Math.ceil(weather.main.temp_min)}&deg;C (max)`;

  let WeatherType = document.getElementById("weather");
  WeatherType.innerText = `${weather.weather[0].main}`;

  let date = document.getElementById("date");
  let todayDate = new Date();
  //console.log(todayDate);
  date.innerText = dateManage(todayDate);
}

function fetching() {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${weatherApi.key}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      dat = data;
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
    });
}
