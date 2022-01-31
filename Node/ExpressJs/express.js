const express = require("express");
const fs = require("fs");
const util = require("util");
const request = require("request");
const app = express();
let content = "";

// request("http://52.221.191.153/api/foods", function (error, response, body) {
//   let data = JSON.parse(body).data;
//   const dataContent = data.map((food) => {
//     content += `<p>Category: ${food.category} Name: ${food.name}  Price:${food.price}  </p>`;
//   });
//   return dataContent;
// });

// app.get("/users/:id", (req, res) => {
//     const user_id = req.params.id;
//     const readFile = util.promisify(fs.readFile);
//     readFile("./user.json")
//     .then((text) => {
//         const data = JSON.parse(text.toString("utf8"));
//         data.map((dt) => {
//             if (dt.id == user_id) {
//                 res.send(dt);
//             }
//         });
//         res.send("Not Found");
//     })
//     .catch((err) => {
//         console.log("Error", err);
//     });
// });

// app.use("/", (req, res) => {
//     res.send(content);
// });

// app.put("/User", (req, res) => {
//     res.send('Got a Put request at /User');
// });


// app.get("/flights/:from-:to", (req, res) => {
//     res.send(req.params);
// });

app.get("/plantae/:genus.:species", (req, res) => {
    res.send(req.params);
});

app.listen(5000);
