const { Thing } = require("./thing");
const { Votable } = require("./mixins/votable");
const { Replyable } = require('./mixins/replyable');

/**A Reddit comment
*/
class Comment extends Thing {
  static kind = "comment";
  constructor(jsraw, jsonData) {
    super(jsraw, jsonData);

    this.votable = new Votable(jsraw, jsonData.data.name);
    this.replyable = new Replyable(jsraw, jsonData.data.name)
    this.jsonData = jsonData;
  }
}

module.exports = Comment;