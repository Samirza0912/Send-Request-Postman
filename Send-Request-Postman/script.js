let container = document.getElementById("container");
let input = document.getElementById("input");
let type = document.getElementById("type");
let celcius = document.getElementById("celcius");
let farenheit = document.getElementById("farenheit");
let btn = document.getElementById("button");
let city = document.getElementById("city");
let country = document.getElementById("country");
let weather = document.getElementById("weather");
let sky = document.getElementById("sky");

$(document).ready(function () {
  $("#button").click(function () {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${input.value}`
      )
      .then((response) => {
        city.innerText = response.data.location.name;
        country.innerText = response.data.location.country;
        weather.innerText =
          type.value == 1
            ? response.data.current.temp_c
            : response.data.current.temp_f;
        sky.innerHTML = `<img src="${response.data.current.condition.icon}" alt="">${response.data.current.condition.text}`;
      });
  });
});
