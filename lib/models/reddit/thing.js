/**@summary Base class for most reddit data structures */

class Thing {
  constructor(jsraw, jsonData) {
    this.jsraw = jsraw;
    this.kind = jsonData.kind;
    this.id = jsonData.data.id;
    this.name = jsonData.data.name;
    this.data = jsonData.data;
  }
}

module.exports.Thing = Thing;