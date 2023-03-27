var express = require('express');

let app1 = express();

app1.get("/", (req, res) => {
  res.send("This is my express app");
});

app1.listen(8080, () => {
  console.log("Started server on 8080");
});

