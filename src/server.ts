import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const server = express();
const globalErrorHandler = require('./errorHandlers/globalErrorHanlder')
require("dotenv").config();

const PORT = process.env.PORT as string;
const DB_STRING = process.env.DB_URL as string;


mongoose.connect(DB_STRING).then((res) => {
    if (res) {
        console.log("DB Connected");
    }
});

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

require('./app')
server.use(globalErrorHandler);

server.listen(PORT, () => {
    console.log("server is running ", PORT);
});
