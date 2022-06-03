const Thing = require("./Thing");
const { Created } = require("./Implementation");

class Message extends Thing {
  constructor(jsonData) {
    super(jsonData);

    this.jsonData = jsonData;
    this.created = new Created(jsonData);
  }
}