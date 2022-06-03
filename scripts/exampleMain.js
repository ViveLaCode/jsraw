async function main() {
  endPoint = process.argv[2];

  if (endPoint != undefined) {
    let data = await fetch("https://oauth.reddit.com" + endPoint, {
      headers: {
        'Authorization': `Bearer ${oauthInfo.accessToken}`,
        'User-Agent': oauthInfo.userAgent
      }
    })
      .then(resp => resp.json())
      .then(
        data => data,
        () => ({})
      );

    console.log(JSON.stringify(data, null, 2));
    return data;

  } else {
    console.log("Incorrect input");
  }
}