// Animations! Especially for weather.

// Day and Night Animations
let day_or_night = "day";

function createDay (weather) { // Day and Night, although night only needs one condition
  if (weather.toLowerCase() === "sunny") {
    main_body.style.backgroundColor = "beige";
  }

  else if (weather.toLowerCase() === "cloudy") {
    main_body.style.backgroundColor = "#373434";
  }

  else if (weather.toLowerCase() === "night") {
    main_body.style.backgroundColor = "black";
  }

  else {
    return "notvalid";
  }
}

function createRain () { // Rain animation
  rain_sound.play();
  createDay("cloudy");
}

function createThunder () { // Thunder animation 
  createRain();
  thunder_sound.play();
}

function stopThunder () {
  rain_sound.pause();
  thunder_sound.pause();

  if (day_or_night === "day") {
    createDay("sunny");
  }

  else {
    createDay("night");
  }
}

// Page transition animations 
function switchPage (id1, id2) {
  $(id1).hide();
  game_window.style.backgroundColor = "red";

  setTimeout(function () {
    game_window.style.backgroundColor = "clear";
    $(id2).show();
  }, 100);
}