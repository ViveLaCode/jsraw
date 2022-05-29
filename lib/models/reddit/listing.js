const thing = require("./base");

/**The class for paginating content */
class listing {
  constructor(_before, _after, _modhash, _children, _data, _kind = "Listing") {
    this.before = _before;
    this.after = _after;
    this.modhash = _modhash;
    this.children = _children;
    this.data = _data;
    this.kind = _kind;
  }
}

module.exports = listing;