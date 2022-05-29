/** Base class for most reddit data structures */

class thing {
  constructor(_id, _name, _kind, _data) {
    this.id = _id;
    this.name = _name;
    this.kind = _kind;
    this.data = _data;
  }
}

module.exports = thing;