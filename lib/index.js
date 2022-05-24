fetch("http://example.com/movies.json")
  .then(response => response.text())
  .then(data => console.log(data));