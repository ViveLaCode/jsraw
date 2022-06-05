const { Buffer } = require('node:buffer');
const oauthInfo = require("../../oauth_info.json");

/* specific POST implementation for reddit API */
async function postData(url = '', data = {}, tokenType = 'Bearer') {

  let authString = oauthInfo.clientId + ':' + oauthInfo.clientSecret;
  let s = Buffer.alloc(authString.length, authString).toString('base64');

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `${tokenType} ${s}`,
      'User-Agent': oauthInfo.userAgent,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(data).toString()
  });

  return response.json();
}

module.exports = postData;