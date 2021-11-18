// Ping the server every once in a while to find out if it is day or night 
let request_type = "weather";

function reqListener () {
  const request_Response = this.responseText;
  console.log("Request on client side made.");
  
  if (request_type === "weather") {
    if (request_Response === "sunny") {
      createDay("sunny");
    }

    else if (request_Response === "cloudy") {
      createDay("cloudy");
    }

    else if (request_Response === "rain") {
      createRain();
    }

    else if (request_Response === "thunder") {
      createThunder();
    }

    else if (request_Response === "snowy") {
      
    }

    else {
      console.log("Connection to weather route on server lost.");
    }
  }

  else if (request_type === "day") {
    if (request_Response === "day") {
      stopThunder();
      createDay("day");
    }

    else {
      stopThunder();
      createDay("night");
    }
  }

  else {
    console.log("Bad request type recieved.");
    return "Bad request type recieved.";
  }
}

setInterval (function () { // Every one minute the server is pinged!
  if (client_type === "browser") {
    fetch ("/weather")
    .then(response => response.text())
    .then(data => {
      if (data === "sunny") {
        createDay("sunny");
      }

      else if (data === "cloudy") {
        createDay("cloudy");
      }

      else if (data === "rain") {
        createRain();
      }

      else if (data === "thunder") {
        createThunder();
      }

      else if (data === "snowy") {}

      else {
        console.log("Connection to weather route on server lost.");
      }
    })
    .catch(error => {
      throw error;
    });
  }

  else if (client === "app") {
    request_type = "weather";
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://Frontier-Woods.codesalvageon.repl.co/weather");
    oReq.send();
  }

  else {
    console.log("Invalid client used.");

    // Here there be dragons!
  }
}, 60000);

setInterval(function () { // Every 5 minutes the server is pinged!
  if (client_type === "browser") {
    fetch ("/day")
    .then(response => response.text())
    .then(data => {
      if (data === "day") {
        stopThunder();
        createDay("day");
      }

      else {
        stopThunder();
        createDay("night");
      }
    })
    .catch(error => {
      throw error;
    });
  }

  else if (client_type === "app") {
    request_type = "day";
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://Frontier-Woods.codesalvageon.repl.co/weather");
    oReq.send();
  }

  else {
    console.log("Invalid client used.");

    // Here there be dragons!
  }
}, 300000);