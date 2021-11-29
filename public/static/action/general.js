// General Script for listing off variables for DOM Manipulation and saved presets
// Begin

// Body and sound effects

function $0(element) {
  return document.querySelector(element);
}

const main_body = $0("body");
const game_window = document.getElementById("game-window");
const rain_sound = document.getElementById("rain-sound");
const thunder_sound = document.getElementById("thunder-sound");
const snow_sound = document.getElementById("snow-sound");
const gunshot_sound = document.getElementById("gunshot-sound");
const status = document.getElementById("status");
const home_status = document.getElementById("home-status");

// Statistics
const temp_stat = document.getElementById("temp-stat");
const health_stat = document.getElementById("health-stat");
const hunger_stat = document.getElementById("hunger-stat");
const hydro_stat = document.getElementById("hydro-stat");
const exp_stat = document.getElementById("exp-stat");
const knowledge_stat = document.getElementById("knowledge-stat");
const food_travel_meter = document.getElementById("food-travel-meter");
const water_bodies_discovered = document.getElementById("water-bodies-discovered");
const mining_node = document.getElementById("mining-node");

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
$("#tutorial").hide();
$("#the-woods").hide();
$("#credits-div").hide();
$("#woods-pic").hide();
$("#woods-controls").hide();
$("#woods-console").hide();
$("#home-controls").hide();
$("#the-plains").hide();
$("#travel-ops2").hide();
$("#travel-hunting").hide();

// Conditional styling functions
function hidePresets () {
  $("#presets").hide();
}
  // Why the hell did I even do this?
function showPresets () {
  $("#presets").show();
}

// Tutorial 
const tutorial_title = document.getElementById("tutorial-title");
const tutorial_content = document.getElementById("tutorial-content");

// Game
const woods_pic = document.getElementById("woods-pic");