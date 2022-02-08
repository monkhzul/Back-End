const express = require("express");
const app = express();
const fs = require("fs");

const router = express.Router();

router.get("/user/:id", log, (req, res, next) => {
    const user_id = req.params.id;
    if(user_id>2000) next("route");
    if(user_id<50) next();
    res.send("i will send user information #1");
}, function(req, res, next) {
    res.send("i will send user information #1.1");
});

router.get("/user/:id", log, (req, res) => {
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
    // fs.appendFile("/Users/lab_1_02/Desktop/Quotes/public/user_activity_log.json",
    // req.originalUrl+"\n", 
    // (err) => {})
    next()
}

var logStuff = [logOriginalUrl, logMethod];
router.get("/arrayuser/:id", (req, res, next) => {
    res.send("User Info");
});




                                    //Error Handling

//Error send to user

router.get("/userid/:id", function (req, res, next) {
    const id = req.params.id;
    if(id < 10) {
        const err = new Error('Can\'t find user with this ID!');
        err.status = 'fail';
        err.statusCode = 500;
        return next(err);
    }
    res.send("User Info with ID" + id);
});

//Error user1

router.get("/user1/:id", function (req, res, next) {
    const id = req.params.id;
    if(id < 10) {
        const err = new Error('Can\'t find user with this ID!');
        err.status = 'fail';
        return next(err);
    }
    res.send("User Info with ID " + id);
}, function (err, req, res, next) {
    res.status(500).json({"message": err.status});
});

//Error user2 without next

router.get("/user2/:id", function (req, res ) {
    const id = req.params.id;
    if(id < 10) {
        return res.status(500).json({"messgae": "something went wrong!"});
    }
    res.send("User Info with ID " + id);
});

//Error user3 using router.use()

router.get("/user3/:id", function (req, res, next) {
    const id = req.params.id;
    if(id < 10) {
        const err = new Error('Can\'t find user with this ID!');
        err.status = 'fail';
        err.statusCode = 500;
        return next(err);
    }
    res.send("User Info with ID" + id);
});
     
router.use(function (err, req, res, next) {
    res.status(500).json({"err": err, "message": "Wrong of course!", "custom": err.status});
})  // next(err) гэж дамжуулсан бүгд энд баригдана

//Error user4 



module.exports = router;