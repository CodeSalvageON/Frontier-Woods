// Handle buttons and forms
// Begin

$("#presets-form").submit(function () { // Handle the presets form
  event.preventDefault();

  if ($("#offline").prop("checked")) {
    temp_mode_preset = "offline";
    localStorage.setItem("frwoods_mode", "offline");
  }

  else if ($("#online").prop("checked")) {
    temp_mode_preset = "online";
    localStorage.setItem("frwoods_mode", "online");
  }

  else {
    console.log("Invalid prop given to radio button.");
    return "Invalid prop given to radio button.";
  }

  if ($("#offline-weather").prop("checked")) {
    temp_weather_preset = "offline";
  localStorage.setItem("frwoods_weather_preset", "offline");
  }

  else if ($("#server-weather").prop("checked")) {
    temp_weather_preset = "server";
    localStorage.setItem("frwoods_weather_preset", "server");
  }

  else {
    console.log("Invalid prop given to radio button.");
    return "Invalid prop given to radio button.";
  }
});