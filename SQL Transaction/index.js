const express = require('express');
const { status } = require('express/lib/response');
const app = express();
const port = 3000;
const orderRoutes = require("./routes/orderRoutes");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.get("/", (req, res) => {
    res.json({message: "ok"});
});
app.use("/orders", orderRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({message: err.message});
    return;
});
app.listen(port, ()=> {
    console.log(`Example app listening at http;//localhost:${port}`);
});