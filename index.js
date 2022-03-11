const ejs = require("ejs");

const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/toric", (req, res) => {
  res.render("toric");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
