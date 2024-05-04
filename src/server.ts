import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const server = express();
const morgan = require("morgan");
const cors = require("cors");
const logger = require("./logger");
const globalErrorHandler = require("./errorHandlers/globalErrorHanlder");
require("dotenv").config();
const PORT = process.env.PORT as string;
const DB_STRING = process.env.DB_URL as string;
const routes = require("./routes");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(cors());

const stream = {
    write: function (message, encoding) {
        logger.info(message.trim());
    },
};

if (process.env.NODE_ENV !== "test") {
    mongoose.connect(DB_STRING).then((res) => {
        if (res) {
            console.log("DB Connected");
        }
    });

    // Used Morgan middleware with the custom Winston stream
    server.use(morgan("combined", { stream: stream }));

    server.listen(PORT, () => {
        console.log("server is running ", PORT);
    });
}

server.use(routes);
server.use(globalErrorHandler);

module.exports = server;
