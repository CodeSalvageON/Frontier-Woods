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

    setOfflineWeather();
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
  $("#woods-controls").hide();
  $("#home-controls").show();

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

$("#go-back-from-home").click(function () {
  $("#home-controls").hide();
  $("#woods-controls").show(); 

  switchView("woods.png");
});

function getSuppliesThru (name) {
  if (name === "woods_1_full") {
    const supply_arr = getRandomSupplies(woods_1_full).split("||"); 
    const supply = supply_arr[0];
    const amt = supply_arr[1];

    woods_1_full = woods_1_full - parseInt(amt);
    status.innerText = "Found " + amt + " " + supply;
  }

  else if (name === "woods_2_full") {
    const supply_arr = getRandomSupplies(woods_2_full).split("||"); 
    const supply = supply_arr[0];
    const amt = supply_arr[1];

    woods_2_full = woods_2_full - parseInt(amt);
    status.innerText = "Found " + amt + " " + supply;
  }

  else if (name === "woods_3_full") {
    const supply_arr = getRandomSupplies(woods_3_full).split("||"); 
    const supply = supply_arr[0];
    const amt = supply_arr[1];

    woods_3_full = woods_3_full - parseInt(amt);
    status.innerText = "Found " + amt + " " + supply;
  }

  else if (name === "woods_4_full") {
    const supply_arr = getRandomSupplies(woods_4_full).split("||"); 
    const supply = supply_arr[0];
    const amt = supply_arr[1];

    woods_4_full = woods_4_full - parseInt(amt);
    status.innerText = "Found " + amt + " " + supply;
  }
}

$("#forage").click(function () {
  if (woods_view === 1) {
    if (woods_1_full > 0) {
      getSuppliesThru("woods_1_full");
    }

    else {
      status.innerText = "You depleted this node.";
    }
  }

  else if (woods_view === 2) {
    if (woods_2_full > 0) {
      getSuppliesThru("woods_2_full");
    }

    else {
      status.innerText = "You depleted this node.";
    }
  }

  else if (woods_view === 3) {
    if (woods_3_full > 0) {
      getSuppliesThru("woods_3_full");
    }

    else {
      status.innerText = "You depleted this node.";
    }
  }

  else if (woods_view === 4) {
    if (woods_4_full > 0) {
      getSuppliesThru("woods_4_full");
    }

    else {
      status.innerText = "You depleted this node.";
    }
  }
});

$("#food-btn").click(function () {
  if (acorns > 0 || meat > 0 || seeds > 0 || cooked_meat > 0 || berries > 0 || mushrooms > 0) {
    home_status.innerText = "No need for food right now";
    return false;
  }

  if (acorns > 0) {
    acorns = acorns - 1;
    hunger = hunger - 10;

    if (hunger < 0) {
      hunger = 0;
    }
  }

  if (meat > 0) {
    meat = meat - 1;
    hunger = hunger - 30;

    if (hunger < 0) {
      hunger = 0;
    }
  }

  if (seeds > 0) {
    seeds = seeds - 1;
    hunger = hunger - 5;

    if (hunger < 0) {
      hunger = 0;
    }
  }

  if (cooked_meat > 0) {
    cooked_meat = cooked_meat - 1;
    hunger = hunger - 50;

    if (hunger < 0) {
      hunger = 0;
    }
  }

  if (berries > 0) {
    berries = berries - 1;
    hunger = hunger - 10;

    if (hunger < 0) {
      hunger = 0;
    }
  }

  if (mushrooms > 0) {
    mushrooms = mushrooms - 1;
    hunger = hunger - 20;

    if (hunger < 0) {
      hunger = 0;
    }
  }

  if (hunger === 0) {
    home_status.innerText = "Satisfied hunger";
  }

  if (acorns === 0 && seeds === 0 && meat === 0 && berries === 0 && cooked_meat === 0 && mushrooms === 0) {
    home_status.innerText = "You have no food";
  }
});