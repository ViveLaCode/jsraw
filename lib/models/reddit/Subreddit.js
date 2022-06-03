const Thing = require("./Thing");
const getData = require("../../util/getData");
const API_PATH = require("../../endpoints");
require("../../util/stringFormat");

/**Represents a Subreddit
 */
class Subreddit extends Thing {
  constructor(subName, jsonData) {
    super(jsonData);
    this.jsonData = jsonData;
    this.name = subName;
  }

  /**Return an array with two listings
   * First listing is information on reddit post
   * Second listing is information on comments
   */
  async getRedditPost(postID36Link) {
    const postLink = API_PATH["reddit_post"].stringFormat(
      {
        'subreddit': this.name,
        'article': postID36Link
      }
    );
    const dataArray = await getData(postLink);
  }
}