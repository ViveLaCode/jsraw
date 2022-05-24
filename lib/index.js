let postData = require("../snippets/fetch_post.js").postData;
let oauthInfo = require("../oauth_info.json");

// clientId:clientSecret
const accessTokenUrl = 'https://www.reddit.com/api/v1/access_token';
let auth = {
  clientId: oauthInfo.clientId,
  clientSecret: oauthInfo.clientSecret
};

let reqBody = {
  grant_type: 'password',
  username: oauthInfo.username,
  password: oauthInfo.password
};
console.log(JSON.stringify(reqBody));

postData(accessTokenUrl, auth, reqBody, oauthInfo.userAgent)
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });