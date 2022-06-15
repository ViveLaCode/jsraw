const { Thing } = require("./thing");
const { Votable } = require("./implementation");

/**A Reddit comment
*/
class Comment extends Thing {
  static kind = "comment";
  constructor(jsonData) {
    super(jsonData);

    this.jsonData = jsonData;
  }
}

module.exports = Comment;