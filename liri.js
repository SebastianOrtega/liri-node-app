require("dotenv").config();
const fs = require("fs");
const keys = require("./keys.js");
const Concert = require("./Concert.js");
const Spotify = require("./Spotify.js");
const Movie = require("./Movie.js");

let [action, ...extra] = process.argv.slice(2);
let actionTerms = extra.join(" ");

function wrapper(action, actionTerms) {
  if (action == "concert-this" && actionTerms != "") {
    let concierto = new Concert();
    console.log(actionTerms);
    concierto.getEvent(actionTerms);
  } else if (action == "spotify-this-song") {
    let spotify = new Spotify();
    spotify.spotifyThisSong(actionTerms);
  } else if (action == "movie-this") {
    let movie = new Movie();
    movie.search(actionTerms);
  } else if (action == "do-what-it-says") {
    readFile();
  } else {
    console.log(
      "Usage: node liri.js action [search terms]\n action: \n\tconcert-this\n\tspotify-this-song\n\tmovie-this\n\tdo-what-it-says"
    );
  }
}

wrapper(action, actionTerms);

function readFile() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
    var dataArr = data.split(",");
    console.log("Action: " + dataArr[0] + "\nSearch terms: " + dataArr[1]);
    wrapper(dataArr[0], dataArr[1]);
  });
}
