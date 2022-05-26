let oauthInfo = require("../oauth_info.json");
let getAccessToken = require("../scripts/fetch_access_token").getAccessToken;

// getAccessToken({do: true, fileName: "oauth_info.json"});

let redditApiEndPoints = [
  // account
  "/api/v1/me",
  "/api/v1/me/blocked",
  "/api/v1/me/friends",
  "/api/v1/me/karma",
  "/api/v1/me/prefs",
  "/api/v1/me/trophies",
  "/prefs/blocked",
  "/prefs/friends",
  "/prefs/messaging",
  "/prefs/trusted",
  "/prefs/where",
];

let endPoint = process.argv[2];

if (endPoint != undefined) {
  fetch("https://oauth.reddit.com" + endPoint, {
    headers: {
      'Authorization': `Bearer ${oauthInfo.accessToken}`,
      'User-Agent': oauthInfo.userAgent
    }
  })
    .then(resp => resp.json())
    .then(data => { console.log(JSON.stringify(data, null, 2)) });

} else {
  console.log("Incorrect input");
}