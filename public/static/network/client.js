// Find Client Type and Such
let client_type = "browser";
const isOnlineSaved = localStorage.getItem("frwoods_mode");

function checkMode () { // Function for checking modes (in case I need it later on)
  if (isOnlineSaved === "" || isOnlineSaved === null || isOnlineSaved === undefined) {
    console.log("User has not decided yet.");
    showPresets();
  }

  else {
    $("#presets").hide();
    
    if (isOnlineSaved === "online") {
        
    }

    else if (isOnlineSaved === "offline") {
      
    }

    else {
      console.log("Bad mode received.");
    }
  }
}