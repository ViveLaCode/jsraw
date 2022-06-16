/**Upvote a random reddit post. Found using "/best" endpoint.
 * First implement in a raw way, then implement in class
*/
const { Votable } = require('../lib/models/reddit/mixins/votable');
const { JSRAWBase } = require('../lib/index');
const { Listing } = require('../lib/models/reddit/listing');
const oauthInfo = require("./oauth_info.json");

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
/*
// jsraw.getAccessToken({ do: true, filePath: "oauth_info.json" })
jsraw.getData('/best')
  .then(listingData => {
    // console.log("Listing Data:", listingData);
    const listing = new Listing(jsraw, listingData);

    children = listing.children;

    return Promise.resolve(children[0].data.name);
    // const stuff = JSON.stringify(listing.children, null, 2);
  })
  .then(childFullName => {
    let votable = new Votable(jsraw, childFullName);
    votable.downvote()
      .then(() => {
        console.log("done");
      });
  });*/
let votable = new Votable(jsraw, 't3_vdambi');
votable.upvote();