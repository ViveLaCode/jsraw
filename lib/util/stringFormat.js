/** Add ".format()" python like function to String */

/** Replace placeholders with strings.
 * Number of arguments is assumed to be same as 
 * number of placeholders.
 * 
 * Source: https://gist.github.com/richardblondet/9a23a155e6a784f1ff2cbd8d84accd72
 */
String.prototype.stringFormat = String.prototype.stringFormat || function () {
  "use strict";
  let str = this.toString();
  if (arguments.length) {
    let t = typeof arguments[0];

    let args = ("string" === t || "number" === t) ?
      Array.prototype.slice.call(arguments)
      : arguments[0];

    for (let key in args) {
      str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
    }
  }

  return str;
};

function usageExample() {
  const API_PATH = require("../endpoints").API_PATH;
  console.log(API_PATH["about_edited"].stringFormat({ "subreddit": "learnjava" }))
}