/**Base class for storing oauth data
 * 
 * Provides a single 'generalised' method which implements POST
 */
class OAuthBase {
  constructor(userAgent, clientId, clientSecret, accessToken, username, password, redirectURI, refreshToken = '') {
    this.userAgent = userAgent;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.accessToken = accessToken;
    this.username = username;
    this.password = password;
    this.redirectURI = redirectURI;
    this.refreshToken = refreshToken;
  }

  /**Generic POST implementation for reddit API
   * @param tokenType 'Bearer' by default
  */
  async post(authToken, url = '', data = {}, tokenType = 'Bearer') {

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `${tokenType} ${authToken}`,
        'User-Agent': this.userAgent,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(data).toString()
    });

    return response.json();
  }
};

/**Class for storing oauth data
 * And provide GET & POST implementations using fetch api
*/
class OAuth extends OAuthBase {
  constructor(userAgent, clientId, clientSecret, accessToken, username, password, redirectURI, refreshToken = '') {
    super(userAgent, clientId, clientSecret, accessToken, username, password, redirectURI, refreshToken);
  }

  /** Async GET function for all GET endpoints.
   * `endPoint` is attached at the end of "https://oauth.reddit.com"
   * Returns a promise with an Object.
   * 
   * If Object is empty, function failed.
   * @async
  */
  async getData(endPoint) {
    const data = await fetch("https://oauth.reddit.com" + endPoint, {
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
        'User-Agent': this.userAgent
      }
    })
      .then(resp => resp.json())
      .then(
        // return data, return {} if fails
        data => data,
        () => ({})
      );

    return Promise.resolve(data);
  }

  /** Asnync POST implementation for reddit API
   * @param tokenType 'Bearer' by default
  */
  async postData(url, data = {}, tokenType = 'Bearer') {
    return await this.post(this.accessToken, url, data, tokenType);
  }

  /** Get access token using username and password stored in a 
   * json file.
   * 
   * Over-write file `fileName` if `do` is true in `writeToFile`.
   * 
   * @param writeToFile default value { do: false, filePath: '' }
   * filePath is preferably path to a json file
  */
  async getAccessToken(writeToFile = { do: false, filePath: '' }) {
    // clientId:clientSecret
    const accessTokenUrl = 'https://www.reddit.com/api/v1/access_token';

    const reqBody = {
      grant_type: 'password',
      username: this.username,
      password: this.password
    };

    const authString = this.clientId + ':' + this.clientSecret;
    const authToken = Buffer.alloc(authString.length, authString).toString('base64');
    
    return await super.post(authToken, accessTokenUrl, reqBody, 'Basic')
      .then(data => {
        this.accessToken = data['access_token']

        if ('refresh_token' in data)
          this.refreshToken = data['refresh_token'];

        if (writeToFile.do) {
          const fs = require('fs');

          // save object into file
          fs.writeFile(
            writeToFile.filePath,
            JSON.stringify({
              userAgent: this.userAgent,
              clientId: this.clientId,
              clientSecret: this.clientSecret,
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              username: this.username,
              password: this.password,
              redirectURI: this.redirectURI,
            }, null, 2),
            () => { });
        }

        return this.accessToken;
      });
  }
};

module.exports.OAuth = OAuth;