const Thing = require("./thing");
const Votable = require("./implementation");
const getData = require("../../util/getData");

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
  let jsonData = await getData(endPoint);

  comment = new Comment(jsonData);
  
  console.log(comment.kind);
  console.log(comment.id);
}

module.exports.usageExample = usageExample;