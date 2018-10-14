const request = require("request");

let Movie = function() {
  this.search = function(movie) {
    movie = movie.replace(" ", "+");
    if (movie == "") movie = "Mr. Nobody";
    let URL = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie;

    console.log(URL);

    request(URL, function(error, response, body) {
      //console.log(response);
      if (response.statusCode == 200) {
        let responseJSON = JSON.parse(body);
        //console.log(responseJSON);
        console.log("______________________________________");
        console.log("Title: " + responseJSON.Title);
        console.log("Release Year: " + responseJSON.Year);
        console.log("Rating: " + responseJSON.Rated);
        try {
          console.log("Rotten Tomatoes: " + responseJSON.Ratings[1].Value);
        } catch (error) {}

        console.log("Country: " + responseJSON.Country);
        console.log("Language: " + responseJSON.Language);
        console.log("Plot:\n " + responseJSON.Plot);
        console.log("Actors:\n " + responseJSON.Actors);
      } else {
        console.log("error");
      }
    });
  };
};

module.exports = Movie;
