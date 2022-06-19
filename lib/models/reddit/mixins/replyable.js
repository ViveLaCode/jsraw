const { API_PATH } = require('../../../endpoints');

class Replyable {
  constructor(jsraw, thing_id) {
    this.jsraw = jsraw;
    this.thing_id = thing_id;
  }

  reply(text) {
    this.jsraw.postData(API_PATH['comment'], {'text': text, 'thing_id': this.thing_id});
  }
};

module.exports.Replyable = Replyable;