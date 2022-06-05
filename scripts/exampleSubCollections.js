const getData = require("../lib/util/getData");

let endPoint;
// endPoint = "/r/SomeOrdinaryGmrs/api/user_flair_v2";
endPoint = "/api/v1/collections/subreddit_collections";
endPoint = "/api/v1/collections/SomeOrdinaryGmrs";
endPoint = "/r/SomeOrdinaryGmrs/api/info";
endPoint = "/r/SomeOrdinaryGmrs/comments/v313by";

getData(endPoint)
  .then(data => {
    if (Object.keys(data).length == 0)
      return Promise.reject("Failed");
    // console.log(data);
    console.log(JSON.stringify(data, null, 2));
  }
  ).catch((reason) => { console.log(reason); });