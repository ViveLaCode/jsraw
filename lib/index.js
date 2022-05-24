// using QuizGameDBApi to host a server and 
// fetching the response text
// fetch("http://localhost:8080/")
//   .then(response => response.text())
//   .then(data => console.log(data));

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  console.log('Data sent: ', data);
  return response.text(); // parses JSON response into native JavaScript objects
}

postData('http://localhost:8080', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });