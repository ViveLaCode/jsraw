/** Base class for most reddit data structures */

class Thing {
  constructor(jsonData) {
    this.id = jsonData.id;
    this.name = jsonData.name;
    this.kind = jsonData.kind;
    this.data = jsonData.data;
  }
}

module.exports = Thing;