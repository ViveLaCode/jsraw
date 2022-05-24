// using QuizGameDBApi to host a server and 
// fetching the response text
module.exports.doFetch = async function() {
  fetch("http://localhost:8080/")
    .then(response => response.text())
    .then(data => console.log(data));
}