/**Instead of being inherited as mixins, instances of these classes
 * will be saved in other reddit data structures.
 * This would make things less complicated.
 */

/**Description: https://github.com/reddit-archive/reddit/wiki/JSON#created-implementation */
class Created  {
  constructor(jsonData) {
    // local epoch-second format
    this.creationDate = jsonData.created;
    this.creationDateUTC = jsonData.created_utc;
  }
}

/**Description: https://github.com/reddit-archive/reddit/wiki/JSON#votable-implementation
*/
class Votable extends Created {
  constructor(jsonData) {
    super(jsonData);
    // number of upvotes, downvotes
    this.ups = jsonData.ups;
    this.downs = jsonData.downs;

    // true if liked by user else false
    // null if not voted
    this.likes = jsonData.likes;
  }
}

module.exports = {
  Votable,
  Created
}