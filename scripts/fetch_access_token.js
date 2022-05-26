let fs = require('fs')
let postData = require("./fetch_post").postData;
let oauthInfo = require("../oauth_info.json");

module.exports.getAccessToken = async function (writeToFile = { 'do': false, fileName: "" }) {
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

  return await postData(accessTokenUrl, auth, reqBody, oauthInfo.userAgent)
    .then(data => {
      oauthInfo['accessToken'] = data['access_token'];

      if ("refresh_token" in data) {
        oauthInfo['refreshToken'] = data['refresh_token'];
      }

      if (writeToFile.do) {
        fs.writeFile(writeToFile.fileName, JSON.stringify(oauthInfo, null, 2), () => { });

      }

      return data['access_token'];
    });
}