var express = require('express');

let app1 = express();
let app2 = express();
let app3 = express();

app1.get("/", (req, res) => {
  res.send("This is my express app");
});

app1.get("/me", (req, res) => {
  res.send("Hi I am Laith");
});

app2.get("/admin", (req, res) => {
  res.send("This is my express app2");
});

app2.get("/admin/me", (req, res) => {
  res.send("Hi I am Laith2");
});

app3.get("/customer", (req, res) => {
  res.send("This is csutomer app");
});

app3.get("/customer/me", (req, res) => {
  res.send("Hi I am customer");
});

app1.listen(3000, () => {
  console.log("Started server on 3000");
});

app2.listen(3002, () => {
  console.log("Started server on 3002");   
});

app3.listen(3003, () => {
  console.log("Started server on 3003");
});

