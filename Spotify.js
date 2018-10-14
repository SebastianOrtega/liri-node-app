require("dotenv").config();
const keys = require("./keys.js");
const Utilities = require("./Utilities.js");
const Spotify = require("node-spotify-api");

let SpotifyClass = function() {
  utilities = new Utilities();
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
      let dataFile = "";
      dataFile += "\n_____________________________________";
      for (let n = 0; n < arr.length; n++) {
        dataFile += "\nArtist: " + arr[n].artists[0].name;
        dataFile += "\nSong's Name: " + arr[n].name;
        dataFile += "\nAlbum: " + arr[n].album.name;
        dataFile += "\nPreview link: " + arr[n].album.external_urls.spotify;
        dataFile += "\n_____________________________________";
      }
      console.log(dataFile);
      utilities.updatefile(dataFile);
    });
  };
};

module.exports = SpotifyClass;
