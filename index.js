var express = require('express');

let app1 = express();
let app2 = express();

app1.get("/", (req, res) => {
  res.send("This is my express app");
});

app1.get("/me", (req, res) => {
  res.send("Hi I am Laith");
});

app2.get("/", (req, res) => {
  res.send("This is my express app2");
});

app2.get("/me", (req, res) => {
  res.send("Hi I am Laith2");
});

app1.listen(3000, () => {
  console.log("Started server on 3000");
});

app2.listen(3002, () => {
  console.log("Started server on 3002");   
});
