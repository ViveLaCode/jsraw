/**Upvote a random reddit post. Found using "/best" endpoint.
 * First implement in a raw way, then implement in class
*/
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

// jsraw.getAccessToken({ do: true, filePath: "oauth_info.json" })
jsraw.getData('/best?after=t3_vfczyr')
  .then(listingData => {
    console.log("Listing Data:", listingData);
    const listing = new Listing(jsraw, listingData);

    children = listing.children;

    console.log(children[0])
  });