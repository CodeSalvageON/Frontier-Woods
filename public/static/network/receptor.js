const is_online = navigator.onLine;
var _0x5964=["\x64\x65\x63\x33\x6E\x74\x52\x33\x63\x65\x70\x74\x6F\x72","\x67\x65\x74\x49\x74\x65\x6D"];const localReceptor=localStorage[_0x5964[1]](_0x5964[0]); // Local receptor
let currentReceptor = localReceptor; // Get the user's current local receptor

thruCheckReceptor();  // Check receptor on page load

function checkReceptor () { // Check if user has a local receptor
  if (localReceptor === null || localReceptor === undefined || localReceptor === "") {
    return "none";
  }

  else {
    return localReceptor;
  }
}

function thruCheckReceptor () {
  if (checkReceptor() === "none") {
    createReceptor();
    local_receptor.innerText = "Local Receptor: " + currentReceptor;
  }

  else {
    local_receptor.innerText = "Local Receptor: " + currentReceptor;
  }
}

function createReceptor () { // It's in the function name.
  const rand_num = Math.floor(Math.random() * 4);
  const rand = Math.random().toString(16).substr(2, 8);
  
  let rand_string = "";

  if (rand_num === 0) {
    rand_string = "park";
  }

  else if (rand_num === 1) {
    rand_string = "ecosphere";
  }

  else if (rand_num === 2) {
    rand_string = "exurb";
  }

  else {
    rand_string = "rush";
  }

  currentReceptor = rand + rand_string + rand_num;
  var _0xe37b=["\x64\x65\x63\x33\x6E\x74\x52\x33\x63\x65\x70\x74\x6F\x72","\x73\x65\x74\x49\x74\x65\x6D"];localStorage[_0xe37b[1]](_0xe37b[0],currentReceptor);
}