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

// const {quotes} = require("./public/data.json");
// const newData = require("../public/book.json");
// app.use("/books", (req, res) =>{
//     res.render("books", newData);
// })
// app.use("/book/:id",(req, res) => {
//     res.render("book", {book: newData.books[req.params.title]})
// })

module.exports = app;