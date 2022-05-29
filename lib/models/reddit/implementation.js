/**Description: https://github.com/reddit-archive/reddit/wiki/JSON#votable-implementation */
class votable {
  constructor(_ups, _downs, _likes) {
    // number of upvotes, downvotes
    this.ups = _ups;
    this.downs = _downs;

    // true if liked by user else false
    // null if not voted
    this.likes = _likes;
  }
}

/**Description: https://github.com/reddit-archive/reddit/wiki/JSON#created-implementation */
class created {
  constructor(_created, _created_utc) {
    // local epoch-second format
    this.created = _created;
    this.created_utc = _created_utc;
  }
}

module.exports = {
  votable,
  created
}