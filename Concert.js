const request = require("request");
const moment = require("moment");
const Utilities = require("./Utilities.js");

let Concert = function() {
  let utilities = new Utilities();
  this.getEvent = function(artist) {
    artist = utilities.replaceAll(artist, " ", "%20");
    let URL =
      "https://rest.bandsintown.com/artists/" +
      artist +
      "/events?app_id=codingbootcamp";

    request(URL, function(error, response, body) {
      if (response.statusCode == 200) {
        let responseJSON = JSON.parse(body);

        let arr = Object.keys(responseJSON).map(function(k) {
          return responseJSON[k];
        });

        let dataFile = "";
        dataFile = "______________________________________\n";

        for (let n = 0; n < arr.length; n++) {
          dataFile += "\nVenue: " + arr[n].venue.name;
          dataFile += "\nCountry: " + arr[n].venue.country;
          dataFile += "\nCity: " + arr[n].venue.city;
          let date = moment(
            //Ajustar el formato de fecha
            arr[n].datetime,
            moment.HTML5_FMT.DATETIME_LOCAL_SECONDS
          );
          dataFile += "\nDate Time: " + date.format("MM/DD/YYYY");
          dataFile += "\n______________________________________";
        }
        console.log(dataFile);
        utilities.updatefile(dataFile);
      } else {
        console.log("error");
      }
    });
  };
};

module.exports = Concert;
