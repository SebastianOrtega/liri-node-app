require("dotenv").config();
var keys = require("./keys.js");

const Concert = require("./Concert.js");

keys.spotify.id;
//console.log(keys.spotify.id);

let concierto = new Concert();
concierto.getEvent("el tri");
