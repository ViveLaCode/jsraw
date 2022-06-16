const { API_PATH } = require('../../../endpoints');

/**Description: https://github.com/reddit-archive/reddit/wiki/JSON#votable-implementation
 * @class expected to be instantiated as soon as data is available.
 * @param jsraw JSRAWBase type object
 * @param id fullname of the thing
 */
class Votable {
  constructor(jsraw, id) {
    this.jsraw = jsraw;
    this.id = id;
  }

  /**Generalized vote implementation. To be used by other member methods.
   * @param direction vote direction
   */
  async _vote(direction) {
    await this.jsraw.postData(API_PATH['vote'], { 'dir': direction, 'id': this.id })
      .catch((reason) => { console.error(reason) });
  }

  clearVote() {
    this._vote(0);
  }

  upvote() {
    this._vote(1)
  }

  downvote() {
    this._vote(-1);
  }
};

module.exports.Votable = Votable;