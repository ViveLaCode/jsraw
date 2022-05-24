// using QuizGameDBApi to host a server and 
// fetching the response text
export async function doFetch() {
  fetch("http://localhost:8080/")
    .then(response => response.text())
    .then(data => console.log(data));
}