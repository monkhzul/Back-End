const express = require("express");
const fs = require("fs");
const util = require("util");
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.static('public'));
const port = 3001;

// app.get("/library", (req, res) => {
//     let about = [];
//     const name = req.query.name;
//     const readFile = util.promisify(fs.readFile);
//     readFile("./aboutMe.json")
//     .then((text) => {
//         const data = JSON.parse(text.toString("utf8"));
//         data.map((dt) => {
//             if (dt.name.includes(name)) {
//                     about.push(dt)
//             }
//         });
//         res.send(about);
//     })
//     .catch((err) => {
//         console.log("Error", err);
//     });
// });

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}
  
app.get("/name", cors(corsOptions), (req, res) => {
    const readFile = util.promisify(fs.readFile);
    readFile("./data/aboutMe.json")
    .then((text) => {
        const data = JSON.parse(text.toString("utf8"));
        res.send(data.name);
    })
    .catch((err) => {
        console.log("Error", err);
    });
});

app.get("/age", cors(corsOptions), (req, res) => {
    const readFile = util.promisify(fs.readFile);
    readFile("./data/aboutMe.json")
    .then((text) => {
        const data = JSON.parse(text.toString("utf8"));
        res.send(data.age);
    })
    .catch((err) => {
        console.log("Error", err);
    });
});

app.get("/major", cors(corsOptions), (req, res) => {
    const readFile = util.promisify(fs.readFile);
    readFile("./data/aboutMe.json")
    .then((text) => {
        const data = JSON.parse(text.toString("utf8"));
        res.send(data.major);
    })
    .catch((err) => {
        console.log("Error", err);
    });
});

app.get("/address", cors(corsOptions), (req, res) => {
    const readFile = util.promisify(fs.readFile);
    readFile("./data/aboutMe.json")
    .then((text) => {
        const data = JSON.parse(text.toString("utf8"));
        res.send(data.address);
    })
    .catch((err) => {
        console.log("Error", err);
    });
});

app.get("/myDescription", cors(corsOptions), (req, res) => {
    const readFile = util.promisify(fs.readFile);
    readFile("./data/aboutMe.json")
    .then((text) => {
        const data = JSON.parse(text.toString("utf8"));
        res.send(data.myDescription);
    })
    .catch((err) => {
        console.log("Error", err);
    });
});

  
app.get("/email", cors(corsOptions), (req, res) => {
    const readFile = util.promisify(fs.readFile);
    readFile("./data/aboutMe.json")
    .then((text) => {
        const data = JSON.parse(text.toString("utf8"));
        res.send(data.email);
    })
    .catch((err) => {
        console.log("Error", err);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost${port}`);
});
