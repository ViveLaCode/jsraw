const Thing = require("./thing");
const { Created } = require("./implementation");

class Account extends Thing {
  constructor(jsonData) {
    super(jsonData);

    this.jsonData = jsonData;
    this.created = new Created(jsonData);
  }
}