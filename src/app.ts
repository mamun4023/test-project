import express from "express";

const app = express();

const routes = require("./routes/index");

app.get("/test", (req, res) => {
    return res.status(200).json({
        message: "Success",
    });
});

app.use(routes);

module.exports = app;
