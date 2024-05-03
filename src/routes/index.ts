import express from "express";
const app = express();
const userRoutes = require("./user");
const analyzerRoutes = require("./analyzer");

app.use("/user", userRoutes);
app.use("/analyzer", analyzerRoutes);

module.exports = app;
