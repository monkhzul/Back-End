const dotenv = require('dotenv').config();
const apiRoutes = require("./routes/api.js");
const db = require("./models");

const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));

db.sequelize.afterConnect(() => {
  console.log('Connection has been established successfully.');
    });
//   .catch(err => {
//   console.error('Unable to connect to the database:', err);
// });

app.use("/api", apiRoutes);
app.all("*", (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
