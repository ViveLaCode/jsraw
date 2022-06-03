const Thing = require("./Thing");
const Votable = require("./Implementation");
const fn = require("../../index");

/**A Reddit comment
*/
class Comment extends Thing  {
  static kind = "comment";
  constructor(jsonData) {
    super(jsonData);

    this.jsonData = jsonData;
  }
}

module.exports = Comment;

async function usageExample() {
  let endPoint = "/prefs/friends";
  let jsonData = await fn(endPoint);

  comment = new Comment(jsonData);
  
  console.log(comment.kind);
  console.log(comment.id);
}
usageExample();

