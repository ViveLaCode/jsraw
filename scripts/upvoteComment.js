/**Upvote a random reddit post. Found using "/best" endpoint.
 * First implement in a raw way, then implement in class
*/
const { Votable } = require('../lib/models/reddit/mixins/votable');
const { JSRAWBase } = require('../lib/index');
const { Listing } = require('../lib/models/reddit/listing');
const { API_PATH } = require('../lib/endpoints');
const oauthInfo = require("./oauth_info.json");
const Comment = require('../lib/models/reddit/comment');

let jsraw = new JSRAWBase(
  oauthInfo['userAgent'],
  oauthInfo['clientId'],
  oauthInfo['clientSecret'],
  oauthInfo['accessToken'],
  oauthInfo['username'],
  oauthInfo['password'],
  oauthInfo['redirectURI'],
  oauthInfo['refreshToken']
);

// jsraw.getAccessToken({ do: true, filePath: "oauth_info.json" })
jsraw.getData(API_PATH['reddit_post'].stringFormat({ 'subreddit': 'LaughingSect', 'article': 'saw9eb' }))
  .then(listingData => {
    const listing = new Listing(jsraw, listingData[1]);

    children = listing.children;

    return Promise.resolve(children);
    // const stuff = JSON.stringify(listing.children, null, 2);
  })
  .then(childFullName => {
    comment = new Comment(jsraw, childFullName[0]);
    comment.votable.upvote();
    comment.replyable.reply("Haha lol");
  });
