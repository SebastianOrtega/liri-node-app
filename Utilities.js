var fs = require("fs");
let Utilities = function() {
  this.updatefile = function(data) {
    //funcion para append en archivo
    fs.appendFile("log.txt", data, function(err) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Search was logged");
      }
    });
  };
  this.replaceAll = function(string, oldOne, newOne) {
    return string.split(oldOne).join(newOne);
  };
};

module.exports = Utilities;
