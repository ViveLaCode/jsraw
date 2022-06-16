/**The class for paginating content 
 * 
 * Expected data
 * 
 * {
 *  kind: 'SOME_STRING',
 *  data: {
 *    after: 'SOME_STRING',
 *    dist: SOME_NUMBER,
 *    modhash: 'SOMETHING',
 *    geo_filter: 'SOMETHING',
 *    children: [
 *        [Object], [Object], [Object], ...
 *      ]
 *  }
 * }
*/
class Listing {
  constructor(jsraw, jsonData) {
    this.jsraw = jsraw;
    
    this.kind = "Listing";
    this.before = jsonData.data.before;
    this.after = jsonData.data.after;
    this.modhash = jsonData.data.modhash;
    // Array of Thing
    this.children = jsonData.data.children;
    this.data = jsonData.data;
  }
}

module.exports.Listing = Listing;