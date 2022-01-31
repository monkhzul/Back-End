const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.set("view options", {layout:false});

app.get("/test", function(req, res) {
    res.render("hello");
})
app.get("/", function(req, res) {
    res.render("index", {name:"Zulaa"});
})
app.get("/404", function(req, res) {
    res.render("404", {message:"Heey"});
})

//const {quotes} = require("./public/data.json");
const newData = require("../public/data.json");
app.use("/quotes", (req, res) =>{
    res.render("quotes", newData);
})
app.use("/quote/:id",(req, res) => {
    res.render("quote", {title: newData.quotes[req.params.id]})
})

module.exports = app;