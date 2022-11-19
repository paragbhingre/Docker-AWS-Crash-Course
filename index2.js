const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my express app2222");
});

app.get("/me", (req, res) => {
  res.send("Hi I am Laith22222");
});

app.listen(6000, () => {
  console.log("listening222");
});

