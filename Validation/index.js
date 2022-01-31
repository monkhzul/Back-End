const express = require("express");
const app = express();
app.use(express.json());
const port = 3002;
// app.use('/static', express.static('public'));
// const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const nameReq = /^[A-Za-z]+$/;
// const phoneReq = /^[0-9]{8}$/;

// app.post("/register", (req, res) => {
//     const data = req.body;
//     let email = data.email;
//     let name = data.name;
//     let phone = data.phone;


//     if(phoneReq.test(phone)) {
//         if (emailPattern.test(email)) {
//             if (nameReq.test(name)){
//                 res.send("all ok")
//             }
//             else {
//                 res.send("name no")
//             }
//         }
//         else {
//             res.send("email no")
//         }
//     }
//     else {
//         res.send("phone no")
//     }
// });

const {body, validationResult } = require("express-validator");

// app.post("/register", body("name").not().isEmpty(), (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({errors: error.array() });
//     } else {
//         res.json({
//             success: true
//         })
//     }
// });

const validate = () => {
    return [
        body("name").not().isEmpty().matches(/^[A-Za-z-\s]+$/),
        body("address").matches(/^[A-Za-z-\s]+$/),
        body("email").isEmail().custom((value) => {
            if (!value.includes("mstars")) throw new Error("Not Appropriate email!");
            return true; //else tohioldold match hiichij bn gj vzne
        }),
        body("phone").isNumeric().isLength({ min: 8, max: 20 }),
        body("password").isLength({ min: 6, max: 12 }).withMessage("Must be at least 6 chars long"),
        body("type").replace(["js"], "javascript"),
        body("username").toLowerCase(),
        body("extension").default("png"),
        body("trimMe").trim(),
    ]
}
app.post("/sanitize", 
        body("type").replace(["js"], "javascript"),
        body("username").toLowerCase(),
        body("extension").default("png"),
        body("trimMe").trim(),
        (req, res) => {
            const data = req.body;
            //hervee bid ugugdliin santai ajillaj ehelvel end hadgalah uildel nemegdene
            res.json({
                success: true,
                data: data,
                message: "successfully recieved data!",
            });
        }
        )
app.post("/register", validate(),
(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    } else {
        res.json({
            success: true
        })
    }
});
app.post('/register/test', (req, res) => {
    const data = req.body;
    res.json({
        'success': true,
        'data': data,
        'message': 'successfully recieved data!'
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});