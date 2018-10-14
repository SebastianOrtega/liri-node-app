require("dotenv").config();
var keys = require("./keys.js");

const Concert = require("./Concert.js");
const Spotify = require("./Spotify.js");
const Movie = require("./Movie.js");

var [action, ...extra] = process.argv.slice(2); // Spread Operator
var actionTerms = extra.join(" ");

if (action == "concert-this" && actionTerms != "") {
  let concierto = new Concert();
  console.log(actionTerms);
  concierto.getEvent(actionTerms);
} else if (action == "spotify-this-song" && actionTerms != "") {
  let spotify = new Spotify();
  spotify.spotifyThisSong(actionTerms);
} else if (action == "movie-this") {
  let movie = new Movie();
  movie.search(actionTerms);
} else if (action == "do-what-it-says") {
  console.log("action type can be actor or show only");
} else {
  console.log(
    "Usage: node liri.js action [search terms]\n action: \n\tconcert-this\n\tspotify-this-song\n\tmovie-this\n\tdo-what-it-says"
  );
}

//console.log(keys.spotify.id);
