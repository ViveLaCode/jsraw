// let base64 = require('base-64')
let Buffer = require('node:buffer').Buffer;

/* specific POST implementation for reddit API */
module.exports.postData = async function (url = '', auth, data = {}, userAgent, tokenType = 'Basic') {

  let authString = auth.clientId + ':' + auth.clientSecret
  let s = Buffer.alloc(authString.length, authString).toString('base64');

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Authorization': `${tokenType} ${s}`,
      'User-Agent': userAgent,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: new URLSearchParams(data).toString()
  });

  return response.text();
}