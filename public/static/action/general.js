// General Script for listing off variables for DOM Manipulation and saved presets
// Begin

// Body and sound effects
const main_body = document.querySelector("body");
const game_window = document.getElementById("game-window");
const rain_sound = document.getElementById("rain-sound");
const thunder_sound = document.getElementById("thunder-sound");

// Statistics
const temp_stat = document.getElementById("temp-stat");
const health_stat = document.getElementById("health-stat");
const hunger_stat = document.getElementById("hunger-stat");
const hydro_stat = document.getElementById("hydro-stat");
const exp_stat = document.getElementById("exp-stat");
const knowledge_stat = document.getElementById("knowledge-stat");

// Inputs
const offlineInput = document.getElementById("offline");
const onlineInput = document.getElementById("online");
const serverWeatherInput = document.getElementById("server-weather");
const offlineWeatherInput = document.getElementById("offline-weather");

// Saved Presets
let temp_mode_preset = "";
let temp_weather_preset = "";
const savedWeatherPreset = localStorage.getItem("frwoods_weather_preset");

// Initial styling for the page, using JQuery
$("#stats").hide();
$("#stats2").hide();

// Conditional styling functions
function hidePresets () {
  $("#presets").hide();
}
  // Why the hell did I even do this?
function showPresets () {
  $("#presets").show();
}