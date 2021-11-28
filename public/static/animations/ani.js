// Animations! Especially for weather.

// Day and Night Animations
let day_or_night = "day";

function createDay (weather) { // Day and Night, although night only needs one condition
  const lowerCaseWeather = weather.toLowerCase();
  
  if (lowerCaseWeather === "sunny") {
    game_window.style.backgroundColor = "beige";
    main_body.style.backgroundColor = "beige";
  }

  else if (lowerCaseWeather === "cloudy") {
    game_window.style.backgroundColor = "#373434";
    main_body.style.backgroundColor = "#373434";
  }

  else if (lowerCaseWeather === "night") {
    game_window.style.backgroundColor = "black";
    main_body.style.backgroundColor = "black";
  }

  else if (lowerCaseWeather === "snow") {
    game_window.style.backgroundColor = "white";
    main_body.style.backgroundColor = "white";
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

function createSnow () {
  stopThunder();
  snow_sound.play();

  createDay("snow");
}

function stopSnow () {
  snow_sound.pause();
 
  if (day_or_night === day) {
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
    game_window.style.backgroundColor = main_body.style.backgroundColor;
    $(id2).show();
  }, 100);
}

function switchView (src) {
  $("#woods-pic").hide();
  woods_pic.src = "/static/images/" + src;
  game_window.style.backgroundColor = "blue";

  setTimeout(function () {
    game_window.style.backgroundColor = main_body.style.backgroundColor;
    $("#woods-pic").show();
  }, 200);
}