const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.set("view options", {layout:false});

app.get("/", function(req, res) {
    res.render("index", {name:"Zulaa"});
})

const {books} = require("../public/book.json");

app.get("/books", function(req, res) {
    res.render("books", {books});
})



module.exports = app;