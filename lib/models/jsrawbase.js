const { OAuth } = require("./oauth");

/**Main base class that abstracts all communication with reddit */
class JSRAWBase extends OAuth {
  constructor(userAgent, clientId, clientSecret, accessToken, username, password, redirectURI, refreshToken = '') {
    super(userAgent, clientId, clientSecret, accessToken, username, password, redirectURI, refreshToken);
    
    this.userAgent = userAgent;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.accessToken = accessToken;
    this.username = username;
    this.password = password;
    this.redirectURI = redirectURI;
    this.refreshToken = refreshToken;
  }
};

module.exports.JSRAWBase = JSRAWBase;