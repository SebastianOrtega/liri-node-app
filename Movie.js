const request = require("request");
const Utilities = require("./Utilities.js");

let Movie = function() {
  this.search = function(movie) {
    let utilities = new Utilities();
    movie = utilities.replaceAll(movie, " ", "+");
    if (movie == "") movie = "Mr. Nobody";
    let URL = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie;

    console.log(URL);

    request(URL, function(error, response, body) {
      if (response.statusCode == 200) {
        let responseJSON = JSON.parse(body);
        let dataFile = "";
        dataFile += "______________________________________";
        dataFile += "\nTitle: " + responseJSON.Title;
        dataFile += "\nRelease Year: " + responseJSON.Year;
        dataFile += "\nRating: " + responseJSON.Rated;
        try {
          dataFile += "\nRotten Tomatoes: " + responseJSON.Ratings[1].Value;
        } catch (error) {}
        dataFile += "\nCountry: " + responseJSON.Country;
        dataFile += "\nLanguage: " + responseJSON.Language;
        dataFile += "\nPlot:\n " + responseJSON.Plot;
        dataFile += "\nActors:\n " + responseJSON.Actors;
        dataFile += "\n______________________________________";
        console.log(dataFile);
        utilities.updatefile(dataFile);
      } else {
        console.log("error");
      }
    });
  };
};

module.exports = Movie;
