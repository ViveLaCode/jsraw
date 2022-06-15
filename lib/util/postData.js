const oauthInfo = require("../../oauth_info.json");

/* specific POST implementation for reddit API */
async function postData(authToken, url = '', data = {}, tokenType = 'Bearer') {

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `${tokenType} ${authToken}`,
      'User-Agent': oauthInfo.userAgent,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(data).toString()
  });

  return response.json();
}

module.exports = postData;