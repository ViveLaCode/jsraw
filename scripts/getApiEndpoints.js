/*To be run on the browser console*/
let organizedEndpoints = { "GET": [], "POST": [], "PUT": [] };

function run() {
  // first get list of "span" elements that have "method" name in them

  let methodNameElements = [...document.getElementsByClassName("method")];

  function extractApiEndpoint() {
    for (let methodNameElem of methodNameElements) {
      let methodNameElemParent = methodNameElem.parentElement;

      let methodName = methodNameElem.innerText;
      let endpointDesc = methodNameElemParent.innerText;
      let uselessSuffix = methodNameElemParent.getElementsByClassName("oauth-scope-list")[0].innerText;

      let endpointStr = endpointDesc.slice(methodName.length, endpointDesc.length - uselessSuffix.length);
      console.log(methodName);
      console.log(endpointDesc);
      console.log(uselessSuffix);
      console.log(endpointStr);
      // organizedEndpoints[methodName.toString()] = organizedEndpoints[methodName].push(endpointStr);
    }
  }

  extractApiEndpoint();
}