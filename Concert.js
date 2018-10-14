const request = require("request");
var moment = require("moment");

let Concert = function() {
  this.getEvent = function(artist) {
    let URL =
      "https://rest.bandsintown.com/artists/" +
      artist +
      "/events?app_id=codingbootcamp";

    request(URL, function(error, response, body) {
      //console.log(response);
      if (response.statusCode == 200) {
        let responseJSON = JSON.parse(body);

        let arr = Object.keys(responseJSON).map(function(k) {
          return responseJSON[k];
        });
        console.log("______________________________________");

        for (let n = 0; n < arr.length; n++) {
          console.log("Venue: " + arr[n].venue.name);
          console.log("Country: " + arr[n].venue.country);
          console.log("City: " + arr[n].venue.city);
          let date = moment(
            arr[n].datetime,
            moment.HTML5_FMT.DATETIME_LOCAL_SECONDS
          );
          console.log("Date Time: " + date.format("MM/DD/YYYY"));
          console.log("______________________________________");
        }
        //console.log(arr.length);
      } else {
        console.log("error");
      }
    });
  };
};

module.exports = Concert;
