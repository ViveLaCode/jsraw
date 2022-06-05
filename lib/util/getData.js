const oauthInfo = require("../../oauth_info.json");

/**Async GET function for all GET endpoints.
 * `endPoint` is attached at the end of "https://oauth.reddit.com"
 * 
 * Returns a promise with an Object.
 * 
 * If Object is empty, function failed.
 */
async function getData(endPoint) {
  let data = await fetch("https://oauth.reddit.com" + endPoint, {
    headers: {
      'Authorization': `Bearer ${oauthInfo.accessToken}`,
      'User-Agent': oauthInfo.userAgent
    },
  })
    .then(resp => resp.json())
    .then(
      data => data,
      () => ({})
    );

  return Promise.resolve(data);
}

module.exports = getData;