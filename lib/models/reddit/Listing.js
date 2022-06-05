const Thing = require("./Thing");

/**The class for paginating content */
class Listing {
  constructor(jsonData) {
    this.kind = "Listing";
    this.before = jsonData.before;
    this.after = jsonData.after;
    this.modhash = jsonData.modhash;
    this.children = jsonData.hildren;
    this.jsonData = jsonData;
  }
}

module.exports = Listing;