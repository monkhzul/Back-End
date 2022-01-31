const express = require("express");
const apiRoutes = require("./routes/api.js");
const adminRoutes = require("./routes/admin.js");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", adminRoutes);

const port = 3002;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})