// Servers, absolute fun...

const fs = require('fs');
const express = require('express');
const sanitizer = require('sanitizer');

var app = require('express')();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Google Firestore

const {
	type,
	project_id,
	private_key_id,
	private_key,
	client_email,
	client_id,
	auth_uri,
	token_uri,
	auth_provider_x509_cert_url,
	client_x509_cert_url
} = process.env;

const serviceAccount = {
	type,
	project_id,
	private_key_id,
	private_key,
	client_email,
	client_id,
	auth_uri,
	token_uri,
	auth_provider_x509_cert_url,
	client_x509_cert_url
};

const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Weather values

let weather_current = "sunny";
let day_or_night = "day";

setInterval(function () {
  if (day_or_night === "day") {
    day_or_night = "night";
  }

  else {
    day_or_night = "day";
  }
}, 600000);

setInterval(function () {
  random_weather = Math.floor(Math.random() * 4);

  if (random_weather === 0) {
    weather_current = "sunny";
  }

  else if (random_weather === 1) {
    weather_current = "cloudy";
  }

  else if (random_weather === 2) {
    weather_current = "rainy";
  }

  else if (random_weather === 3) {
    weather_current = "thunder";
  }

  else if (random_weather === 4) {
    weather_current = "snowing";
  }
}, 1200000);

// Routes

app.get('', function (req, res) {
  const index = __dirname + '/public/static/index.html';

  res.sendFile(index);
});

app.get('/weather', function (req, res) {
  res.send(weather_current);
  console.log("Weather request recieved");
});

app.get('/day', function (req, res) {
  console.log("REQUEST FOR DAY SENT");
  res.send(day_or_night);
});

// Network checkers

function checkForValidID (id) { // Check for a valid ID
  if (id.includes("park") || id.includes("ecosphere") || id.includes("exurb") || id.includes("rush")) {
    return true;
  }

  else {
    return false;
  }
}

function checkForValidNameKey (key) {
  if (key.includes("65^8*($$")) {
    return true;
  }

  else {
    return false;
  }
}

app.post('/postname', async function (req, res) {
  const name = req.body.name;
  const clean_name = sanitizer.sanitize(name);

  const name_key = req.body.key;
  const id = req.body.id;

  const nameRef = db.collection('frontwoods').doc('chatlog');
  const doc = await nameRef.get();

  if (checkForValidID(id) === true) {
    if (checkForValidNameKey(name_key) === true) {
      const name_set = doc.data().log;
      const appendData = {
        log : name_set + "-||-" + clean_name
      }

      nameRef.set(appendData);
    }

    else {
      res.send("nokey");
    }
  }

  else {
    res.send("noid");
  }
});

http.listen(port, function(){
  console.log('listening on *:' + port);

  const nameRef = db.collection('frontwoods').doc('chatlog');

  async function fixNames () {
    const doc = await nameRef.get();

    if (!doc.exists) {
      const fix_data = {
        log : ""
      }

      await nameRef.set(fix_data);

      console.log("FIXED");
    }

    else {
      console.log("No Fix needed.");
    }
  }

  fixNames();
});