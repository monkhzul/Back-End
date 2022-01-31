const express = require("express");
const app = express();
const fs = require("fs");

app.get("/user/:id", log, (req, res, next) => {
    const user_id = req.params.id;
    if(user_id>2000) next("route");
    if(user_id<50) next();
    res.send("i will send user information #1");
}, function(req, res, next) {
    res.send("i will send user information #1.1");
});

app.get("/user/:id", log, (req, res) => {
    res.send('i will send user information #2');
});

function logOriginalUrl(req, res, next) {
    console.log("Request URL:", req.originalUrl);
    next();
}

function logMethod(req, res, next) {
    console.log("Request Type:", req.method);
    next();
}

function log(req, res, next) {
    const content = req.originalUrl;
    fs.writeFile("/Users/lab_1_02/Desktop/Quotes/public/user_activity_log.json",
    req.originalUrl+"\n", 
    {flag: "a+"}, 
    (err) => {});
    fs.appendFile("/Users/lab_1_02/Desktop/Quotes/public/user_activity_log.json",
    // req.originalUrl+"\n", 
    (err) => {})
    next()
}

var logStuff = [logOriginalUrl, logMethod];
app.get("/arrayuser/:id", (req, res, next) => {
    res.send("User Info");
});

module.exports = app;