const express = require('express');
const router = express.Router();
const orderService = require("../services/orderServices");

router.get("/", async function(req, res, next) {
    try {
        res.json(await orderService.getOrders(req.query.page));
    } catch (err) {
        console.error(`Error while getting orders `, err.message);
        next(err);
    }
});


module.exports = router;