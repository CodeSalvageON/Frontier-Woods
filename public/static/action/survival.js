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