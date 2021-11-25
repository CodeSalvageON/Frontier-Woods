// Handle offline weather

let weather_current = "sunny";
let day_or_night_offline = "day";

function setOfflineWeather () {
  setInterval(function () {
    if (day_or_night_offline === "day") {
      day_or_night_offline = "night";
      stopThunder();
      createDay("day");
    }

    else {
      day_or_night_offline = "day";
      stopThunder();
      createDay("night");
    }
  }, 600000);

  setInterval(function () {
    random_weather = Math.floor(Math.random() * 4);

    if (random_weather === 0) {
      weather_current = "sunny";
      createDay("sunny");
    }

    else if (random_weather === 1) {
      weather_current = "cloudy";
      createDay("cloudy");
    }

    else if (random_weather === 2) {
      weather_current = "rainy";
      createRain();
    }

    else if (random_weather === 3) {
      weather_current = "thunder";
      createThunder();
    }

    else if (random_weather === 4) {
      weather_current = "snowing";
      createSnow();
    }
  }, 1200000);
}