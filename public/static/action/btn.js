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

$("#travel-btn").click(function () {
  switchPage("#the-woods", "#the-plains");
  $("#travel-ops1").show();
  food_travel_meter.innerText = "Food to Spare: " + food;
  water_bodies_discovered.innerText = "Water Bodies Discovered: " + water_bodies;
});

$("#go-back-from-the-plains").click(function () {
  switchPage("#the-plains", "#the-woods");
});

function loadHunt () {
  $("#travel-ops2").hide();
  $("#travel-hunting").show();

  animalRand = Math.floor(Math.random() * 3);

  if (animalRand === 0) {
    $("#deer").show();
  }

  else if (animalRand === 1) {
    $("#turkey").show();
  }

  else {
    $("#bear").show();
  }
}

function loadTown () {
  $("#travel-ops2").hide();
  $("#travel-town").show();
}

$("#start-exploring").click(function () {
  $("#travel-ops1").hide();
  $("#travel-ops2").show();

  let currentDate = new Date();

  mining_node.innerText = "Mining Node: " + currentDate;
  let got_supply = false;
  let is_hunting = false;

  let miningInterval = setInterval(function () {
    randSupply = Math.floor(Math.random() * 35);
    randSupplyAmount = Math.floor(Math.random() * 20);

    if (is_hunting === true) {
      return false;
    }

    if (randSupplyAmount === 0) {
      randSupplyAmount = 1;
    }

    if (randSupply === 0) {
      mining_node.innerText = "Found some branches.";
      wood += randSupplyAmount;
    }

    else if (randSupply === 1) {
      mining_node.innerText = "Discovered a deposit of various metals!!";
      metal += randSupplyAmount;
    }

    else if (randSupply === 2) {
      mining_node.innerText = "Got some acorns.";
      acorns += randSupplyAmount;
    }

    else if (randSupply === 3) {
      // is_hunting = true;
      // loadHunt();
      mining_node.innerText = "Killed a hare.";
      meat += 1;
    }

    else if (randSupply === 4) {
      mining_node.innerText = "Found an assortment of seeds.";
      seeds += randSupplyAmount;
    }

    else if (randSupply === 5) {
      mining_node.innerText = "Dug up some long grass.";
      grass += randSupplyAmount;
    }

    else if (randSupply === 6) {
      mining_node.innerText = "Came across a pile of manure.";
      manure += randSupplyAmount;
    }

    else if (randSupply === 7) {
      mining_node.innerText = "Collected some urine.";
      urine += randSupplyAmount;
    }

    else if (randSupply === 8) {
      mining_node.innerText = "Picked up a handful of stones.";
      stones += randSupplyAmount;
    }

    else if (randSupply === 9) {
      mining_node.innerText = "Found a geyser full of sulfur!";
      sulfur += randSupplyAmount;
    }

    else if (randSupply === 10) {
      mining_node.innerText = "Rummaged through a berry bush.";
      berries += randSupplyAmount;
    }

    else if (randSupply === 11) {
      mining_node.innerText = "Dug up a patch of mushrooms.";
      mushrooms += randSupplyAmount;
    }

    else if (randSupply === 12) {
      mining_node.innerText = "You found a water source! Perfect!";
      water_bodies += randSupplyAmount;
    }

    else if (randSupply === 13) {
      mining_node.innerText = "Came across a town or an outpost of some sort.";
      is_hunting = true;

      loadTown();
    }

    else if (randSupply === 14) {
      mining_node.innerText = "Some experience for all your troubles.";
      exp += randSupplyAmount;
    }

    else {
      mining_node.innerText = "Nothing thus far.";
    }
  }, 10000);

  $("#abort-journey").click(function () {
    clearInterval(miningInterval);

    switchPage("#travel-ops2", "#the-woods");
    
    $("#the-plains").hide();
    $("#travel-ops2").hide();
    $("#travel-ops1").hide();
    $("#travel-hunting").hide();
    $("#deer").hide();
    $("#bear").hide();
    $("#turkey").hide();
    $("#travel-town").hide();
  });
});

$("#cook-btn").click(function () {
  if (meat < 1) {
    home_status.innerText = "You do not have meat";
  }

  else {
    if (wood < 5) {
      let wood_needed = 5 - wood;
      home_status.innerText = "You need " + wood_needed + " wood";
    }

    else {
      meat = meat - 1;
      cooked_meat += 1;
      home_status.innerText = "Cooked meat";
    }
  }
});

$("#view-console").click(function () {
  $("#woods-controls").hide();
  $("#woods-console").show();
});

$("#go-back-from-console").click(function () {
  $("#woods-console").hide();
  $("#woods-controls").show();
});

$("#goto-water").click(function () {
  if (water_bodies === 0) {
    
  }

  else {
    
  }
});

$("#build-tools").click(function () {
  switchPage("#the-woods", "#tools-build");
});

$("#go-back-from-tools").click(function () {
  switchPage("#tools-build", "#the-woods");
});

$("#tools-research").submit(function () {
  event.preventDefault();

  let tool_value = toolSelect.value;

  if (tool_value === "stone_knife") {
    if (stones < 2) {
      tool_error.innerText = "You need " + String(2 - stones) + " stones.";
    }

    else {
      stone_knives += 1;
      tool_error.innerText = "Built one stone knife.";
      stones = stones - 2;
    }
  }

  else if (tool_value === "arrow") {
    if (wood < 1) {
      tool_error.innerText = "You need " + String(1 - wood) + " wood.";
    }

    else {
      if (stones < 1) {
        tool_error.innerText = "You need " + String(1 - stones) + " stones.";
      }

      else {
        arrows += 1;
        tool_error.innerText = "Built one arrow.";

        wood = wood - 1;
        stones = stones - 1;
      }
    }
  }

  else if (tool_value === "rope") {
    if (wood < 10) {
      tool_error.innerText = "You need " + String(10 - wood) + " wood.";
    }

    else {
      rope += 1;
      tool_error.innerText = "Built one rope.";

      wood = wood - 10;
    }
  }

  else if (tool_value === "bow") {
    if (wood < 5) {
      tool_error.innerText = "You need " + String(5 - wood) + " wood.";
    }

    else {
      if (rope < 1) {
        tool_error.innerText = "You need " + String(1 - rope) + " rope.";
      }

      else {
        bow += 1;
        tool_error.innerText = "Built one bow.";

        wood = wood - 5;
        rope = rope - 1
      }
    }
  }

  else if (tool_value === "axe") {
    if (wood < 1) {
      tool_error.innerText = "You need " + String(1 - wood) + " wood.";
    }

    else {
      if (metal < 3) {
        tool_error.innerText = "You need " + String(3 - metal) + " metal.";
      }

      else {
        axe += 1;
        tool_error.innerText = "Built one axe.";

        wood = wood - 1;
        metal = metal - 3;
      }
    }
  }

  else if (tool_value === "saw") {
    if (wood < 2) {
      tool_error.innerText = "You need " + String(2 - wood) + " wood.";
    }

    else {
      if (metal < 2) {
        tool_error.innerText = "You need " + String(2 - metal) + " metal.";
      }

      else {
        saw += 1;
        tool_error.innerText = "Built one wood saw.";

        wood = wood - 2;
        metal = metal - 2;
      }
    }
  }

  else if (tool_value === "sword") {
    if (wood < 1) {
      tool_error.innerText = "You need " + String(1 - wood) + " wood.";
    }

    else {
      if (metal < 2) {
        tool_error.innerText = "You need " + String(2 - metal) + " metal.";
      }

      else {
        sword += 1;
        tool_error.innerText = "Built one sword.";

        wood = wood - 1;
        metal = metal -2;
      }
    }
  }

  else if (tool_value === "trap1") {
    if (wood < 10) {
      tool_error.innerText = "You need " + String(10 - wood) + " wood.";
    }

    else {
      trap1 += 1;
      tool_error.innerText = "Built one small wooden trap.";

      wood = wood - 10;
    }
  }

  else if (tool_value === "trap2") {
    if (metal < 10) {
      tool_error.innerText = "You need " + String(10 - metal) + " metal.";
    }

    else {
      trap2 += 1;
      tool_error.innerText = "Built one metal bear trap.";

      metal = metal - 10;
    }
  }

  else if (tool_value === "fishing_rod") {
    if (wood < 5) {
      tool_error.innerText = "You need " + String(5 - wood) + " wood.";
    }

    else {
      if (rope < 10) {
        tool_error.innerText = "You need " + String(10 - rope) + " wood.";
      }

      else {
        tool_error.innerText = "Built one fishing rod.";
        fishing_rod += 1;

        wood = wood - 5;
        rope = rope - 10;
      }
    }
  }

  else if (tool_value === "net") {
    if (rope < 50) {
      tool_error.innerText = "You need " + String(50 - rope) + " rope.";
    }

    else {
      tool_error.innerText = "Built one net.";
      nets += 1;

      rope = rope - 50;
    }
  }

  else if (tool_value === "bullet") {
    if (sulfur < 1) {
      tool_error.innerText = "You need " + String(2 - sulfur) + " sulfur";
    }

    else {
      if (wood < 2) {
        tool_error.innerText = "You need " + String(2 - wood) + " wood";
      }

      else {
        if (urine < 3) {
          tool_error.innerText = "You need " + String(3 - urine) + " urine";
        }

        else {
          if (manure < 3) {
            tool_error.innerText = "You need " + String(3 - manure) + " manure";
          }

          else {
            if (metal < 1) {
              tool_error.innerText = "You need " + String(1 - metal) + " metal";
            }

            else {
              tool_error.innerText = "Built one bullet.";
              bullets += 1;

              sulfur = sulfur - 1;
              wood = wood - 2;
              urine = urine - 3;
              manure = manure - 3;
            }
          }
        }
      }
    }
  }

  else if (tool_value === "rifle") {
    if (wood < 4) {
      tool_error.innerText = "You need " + String(4 - wood) + " wood.";
    }

    else {
      if (metal < 2) {
        tool_error.innerText = "You need " + String(2 - metal) + " metal.";
      }

      else {
        tool_error.innerText = "Built one rifle.";
        rifles += 1;

        wood = wood - 4;
        metal = metal - 2;
      }
    }
  }
});

$("#upgrade-btn").click(function () {
  if (home_type === 2) {
    home_status.innerText = "Home at max level";
    return false;
  }
  
  if (wood < 10000) {
    home_status.innerText = "Need " + String(10000 - wood) + " wood.";
  }

  else {
    home_type = 2;
    home_status.innerText = "Upgraded home.";
    switchView("cabin.png");
  }
});

$("#lay-traps").click(function () { // I could really have optimized this better but oh well
  function checkTraps (type, amount) {
    if (type === "small") {
      for (i = 0; i < amount; i++) {
        let trapRNG = Math.floor(Math.random() * 2);
        let catchRNG = Math.floor(Math.random() * 5);

        if (catchRNG === 0) {
          catchRNG = 1;
        }

        if (trapRNG === 0) {
          setTimeout(function () {
            status.innerText = "Broken trap, caught nothing.";
          }, 5000);
        }

        else {
          setTimeout(function () {
            status.innerText = "Got " + catchRNG + " hare meat.";
            meat += catchRNG;
            trap1 = trap1 - 1;
          }, 5000);
        }
      }
    }

    else if (type === "bear") {
      for (i = 0; i < amount; i++) {
        let trapRNG = Math.floor(Math.random() * 2);
        let catchRNG = Math.floor(Math.random() * 5);

        if (catchRNG === 0) {
          catchRNG = 1;
        }

        if (trapRNG === 0) {
          setTimeout(function () {
            status.innerText = "Broken trap, caught nothing.";
          }, 5000);
        }

        else {
          setTimeout(function () {
            status.innerText = "Got " + catchRNG + " bear meat.";
            meat += catchRNG * 2;
            trap2 = trap2 - 1;
          }, 5000);
        }
      }
    }

    else if (type === "both") {
      trap2 = 0;
      trap1 = 0;

      for (i = 0; i < amount; i++) {
        meat += 1;
      }

      status.innerText = "Got a good amount of meat.";
    }
  }

  if (trap1 < 1 && trap2 < 1) {
    status.innerText = "You don't have any traps.";
  }

  else {
    if (trap1 > 0 && trap2 < 1) {
      status.innerText = "Set " + trap1 + " wooden traps.";
      checkTraps("small", trap1);
    }

    else {
      if (trap1 < 1 && trap2 > 0) {
        status.innerText = "Set " + trap2 + " bear traps.";
        checkTraps("bear", trap2);
      }

      else {
        status.innerText = "Set " + String(trap1 + trap2) + "wooden and bear traps.";
        checkTraps("both", trap1 + trap2);
      }
    }
  }
});

$("#go-hunting").click(function () {
  switchPage("#the-woods", "#the-hunt");
});

$("#go-back-from-the-hunt").click(function () {
  switchPage("#the-hunt", "#the-woods");
});

$("#start-the-hunt").click(function () {
  if (stone_knives === 0 && bow === 0 && axe === 0 && saw === 0 && sword === 0 && rifles === 0) {
    hunt_status.innerText = "You have no weapon.";
  }

  else {
    if (rifles > 0 && stone_knives === 0 && bow === 0 && axe === 0 && saw === 0 && rifles === 0 && sword === 0) {
      if (bullets < 1) {
        hunt_status.innerText = "You have no bullets for your rifle";
      }
    }

    else {
      if (bow > 0 && stone_knives === 0 && rifles === 0 && axe === 0 && saw === 0 && sword === 0) {
        if (arrows < 1) {
          hunt_status.innerText = "You have no arrows for your bow";
        }
      }

      else { 
        function goHunting (power) {
          let prePower = 20;
          let newPower = prePower - power;

          const randHuntResult = Math.floor(Math.random() * newPower);

          if (randHuntResult === 0) {
            hunt_status.innerText = "Got a good sized bear.";
            meat += 10;
          }

          else if (randHuntResult === 1) {
            hunt_status.innerText = "Got a nice-sized deer.";
            meat += 6;
          }

          else {
            hunt_status.innerText = "Bad hunt; didn't get anything";
          }
        }
        
        if (rifle > 0) {
          goHunting(10);
        }

        else if (bow > 0) {
          goHunting(8);
        }

        else if (sword > 0) {
          goHunting(6);
        }

        else if (axe > 0) {
          goHunting(4);
        }

        else if (saw > 0) {
          goHunting(2);
        }

        else if (stone_knives > 0) {
          goHunting(0);
        }
      }
    }
  }
});