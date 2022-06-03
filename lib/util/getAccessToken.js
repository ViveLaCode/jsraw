let oauthInfo = require("../../oauth_info.json");
const fs = require('fs');
const postData = require("./postData");

/** Get access token using username and password stored in a 
 * json file.
 * 
 * Over-write file `fileName` if `do` is true in `writeToFile`.
 * 
 * `writeToFile` default value = { do: false, fileName: "" }
 */
async function getAccessToken(writeToFile = { do: false, fileName: "" }) {
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

      if ("refresh_token" in data)
        oauthInfo['refreshToken'] = data['refresh_token'];

      if (writeToFile.do)
        fs.writeFile(writeToFile.fileName, JSON.stringify(oauthInfo, null, 2), () => { });

      return data['access_token'];
    });
}

module.exports = getAccessToken;