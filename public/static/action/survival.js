// Variables and functions for survival related things
// Begin 

let temp = 75;
let health = 100;
let hunger = 0;
let hydro = 100;
let exp = 0;
let knowledge = 0;

// Store in save files 
const temp_store = localStorage.getItem("frwoods_temp");
const health_store = localStorage.getItem("frwoods_health");
const hunger_store = localStorage.getItem("frwoods_hunger");
const hydro_store = localStorage.getItem("frwoods_hydro");
const exp_store = localStorage.getItem("frwoods_exp");
const knowledge_store = localStorage.getItem("frwoods_knowledge");
const home_store = localStorage.getItem("frwoods_home");

// The actual game itself!
let woods_view = 1;
let home_type = 1;
let is_at_home = false;

// Supplies 
let wood = 0; // Branches, twigs, sticks, pinecones
let metal = 0;
let acorns = 0;
let meat = 0;
let seeds = 0;
let cooked_meat = 0;
let fur = 0;
let charcoal = 0;
let grass = 0;
let manure = 0;
let urine = 0;
let stones = 0;
let sulfur = 0;
let berries = 0;
let mushrooms = 0;

// Supply limits for the woods
let woods_1_full = 50;
let woods_2_full = 50;
let woods_3_full = 50;
let woods_4_full = 50;

function getRandomSupplies (amount) {
  const amount_random = Math.floor(Math.random() * amount + 1);
  const supplies_random = Math.floor(Math.random() * 11);

  if (supplies_random === 0) {
    for (i = 0; i < amount_random; i++) {
      wood += 3;
    }

    return "branches||" + amount_random;
  }

  else if (supplies_random === 1) {
    for (i = 0; i < amount_random; i++) {
      wood += 1;
    }
  
    return "twigs||" + amount_random;
  }

  else if (supplies_random === 2) {
    for (i = 0; i < amount_random; i++) {
      wood += 2;
    }

    return "sticks||" + amount_random;
  }

  else if (supplies_random === 3) {
    for (i = 0; i < amount_random; i++) {
      wood += 1;
    }

    return "pinecones||" + amount_random;
  }

  else if (supplies_random === 4) {
    for (i = 0; i < amount_random; i++) {
      acorns += 1;
    }

    return "acorns||" + amount_random;
  }

  else if (supplies_random === 5) {
    for (i = 0; i < amount_random; i++) {
      seeds += 1;
    }

    return "seeds||" + amount_random;
  }

  else if (supplies_random === 6) {
    for (i = 0; i < amount_random; i++) {
      grass += 1;
    }

    return "grass||" + amount_random;
  }

  else if (supplies_random === 7) {
    for (i = 0; i < amount_random; i++) {
      manure += 1;
    }

    return "manure||" + amount_random;
  }

  else if (supplies_random === 8) {
    for (i = 0; i < amount_random; i++) {
      stones += 1;
    }

    return "stones||" + amount_random;
  }

  else if (supplies_random === 9) {
    for (i = 0; i < amount_random; i++) {
      berries += 1;
    }

    return "berries||" + amount_random;
  }

  else if (supplies_random === 10) {
    for (i = 0; i < amount_random; i++) {
      mushrooms += 1;
    }

    return "mushrooms||" + amount_random;
  }
}

setInterval(function () {
  woods_1_full = 50;
  woods_2_full = 50;
  woods_3_full = 50;
  woods_4_full = 50;
}, 300000);

// Save supplies
const wood_store = localStorage.getItem("frwoods_wood");
const metal_store = localStorage.getItem("frwoods_metal"); 
const acorns_store = localStorage.getItem("frwoods_acorns"); 
const meat_store = localStorage.getItem("frwoods_meat"); 
const seeds_store = localStorage.getItem("frwoods_seeds"); 
const cooked_meat_store = localStorage.getItem("frwoods_cooked_meat"); 
const fur_store = localStorage.getItem("frwoods_fur"); 
const charcoal_store = localStorage.getItem("frwoods_charcoal"); 
const grass_store = localStorage.getItem("frwoods_grass"); 
const manure_store = localStorage.getItem("frwoods_manure"); 
const urine_store = localStorage.getItem("frwoods_urine"); 
const stones_store = localStorage.getItem("frwoods_stones");
const sulfur_store = localStorage.getItem("frwoods_sulfur");
const berries_store = localStorage.getItem("frwoods_berries");
const mushrooms_store = localStorage.getItem("frwoods_mushrooms");