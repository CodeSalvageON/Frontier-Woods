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

    setOfflineWeather();
  }

  else if ($("#server-weather").prop("checked")) {
    temp_weather_preset = "server";
    localStorage.setItem("frwoods_weather_preset", "server");
  }

  else {
    console.log("Invalid prop given to radio button.");
    return "Invalid prop given to radio button.";
  }

  switchPage("#presets", "#woods");
});

$("#presets-btn").click(function () {
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

  switchPage("#presets", "#tutorial");
});

$("#skip-tutorial").click(function () {
  switchPage("#tutorial", "#the-woods");
  
  setTimeout(function () {
    $("#stats").fadeIn(3000);
    $("#stats2").fadeIn(3000);
    $("#woods-pic").fadeIn(5000);
    $("#woods-controls").fadeIn(5000);
  }, 500);
});

$("#credits-btn").click(function () {
  switchPage("#presets", "#credits-div");
});

$("#go-back-from-credits").click(function () {
  switchPage("#credits-div", "#presets");
});

$("#look-btn").click(function () {
  if (woods_view === 1) {
    woods_view = 2;
    switchView("woods1.png");
  }

  else if (woods_view === 2) {
    woods_view = 3;
    switchView("woods2.png");
  }

  else if (woods_view === 3) {
    woods_view = 4;
    switchView("woods3.png");
  }

  else {
    woods_view = 1;
    switchView("woods.png");
  }
});

$("#home-btn").click(function () {
  if (home_type === 1) {
    switchView("tent.png");
  }

  else if (home_type === 2) {
    switchView("cabin.png");
  }

  else {
    console.log("Here there be dragons!");
    // Here there be dragons!
  }
});