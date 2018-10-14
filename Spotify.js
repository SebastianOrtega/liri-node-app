require("dotenv").config();
const keys = require("./keys.js");
//const request = require("request");
const Spotify = require("node-spotify-api");

let SpotifyClass = function() {
  this.spotifyThisSong = function(song) {
    if (song == "") {
      song = "The Sign, ace of base";
    }
    let spotify = new Spotify({
      id: keys.spotify.id,
      secret: keys.spotify.secret
    });

    spotify.search({ type: "track", query: song }, function(err, data) {
      if (err) {
        return console.log("Error occurred: " + err);
      }

      let arr = Object.keys(data.tracks.items).map(function(k) {
        return data.tracks.items[k];
      });
      //console.log(arr);
      console.log("_____________________________________");
      for (let n = 0; n < arr.length; n++) {
        console.log("Artist: " + arr[n].artists[0].name);
        console.log("Song's Name: " + arr[n].name);
        console.log("Album: " + arr[n].album.name);
        console.log("Preview link: " + arr[n].album.external_urls.spotify);
        console.log("_____________________________________");
      }
    });
  };
};

module.exports = SpotifyClass;
