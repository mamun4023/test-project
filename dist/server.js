"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const server = (0, express_1.default)();
const globalErrorHandler = require('./errorHandlers/globalErrorHanlder');
require("dotenv").config();
const PORT = process.env.PORT;
const DB_STRING = process.env.DB_URL;
mongoose_1.default.connect(DB_STRING).then((res) => {
    if (res) {
        console.log("DB Connected");
    }
});
server.use(body_parser_1.default.urlencoded({ extended: true }));
server.use(body_parser_1.default.json());
require('./app');
server.use(globalErrorHandler);
server.listen(PORT, () => {
    console.log("server is running ", PORT);
});
