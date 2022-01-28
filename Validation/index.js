const express = require("express");
const app = express();
app.use(express.json());
app.use('/static', express.static('public'));
const port = 3002;
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameReq = /^[A-Za-z]+$/;
const phoneReq = /^[0-9]{8}$/;

app.post("/register", (req, res) => {
    const data = req.body;
    let email = data.email;
    let name = data.name;
    let phone = data.phone;


    if(phoneReq.test(phone)) {
        if (emailPattern.test(email)) {
            if (nameReq.test(name)){
                res.send("all ok")
            }
            else {
                res.send("name no")
            }
        }
        else {
            res.send("email no")
        }
    }
    else {
        res.send("phone no")
    }
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});