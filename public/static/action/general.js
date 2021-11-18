// General Script for listing off variables for DOM Manipulation
// Begin

// Body and sound effects
const main_body = document.querySelector("body");
const rain_sound = document.getElementById("rain-sound");
const thunder_sound = document.getElementById("thunder-sound");

// Statistics
const temp_stat = document.getElementById("temp-stat");
const health_stat = document.getElementById("health-stat");
const hunger_stat = document.getElementById("hunger-stat");
const hydro_stat = document.getElementById("hydro-stat");
const exp_stat = document.getElementById("exp-stat");
const knowledge_stat = document.getElementById("knowledge-stat");

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