"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// const path = require("path");
require("dotenv").config();
// require("./config");
// const globalErrorHandler = require("./errorHandler/globalErrorHandler");
// const routes = require("./routes");
const PORT = process.env.PORT;
// const DB_STRING = process.env.DB_URL as string;
// const Auth = require('./middlewares/auth')
// mongoose.connect(DB_STRING).then((res) => {
//     if (res) {
//         console.log("DB Connected");
//     }
// });
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());
// // app.get("/test", Auth, (req, res) => {
// //     res.send(req.user)
// // });
// app.use("/api/v1", routes);
// app.use(globalErrorHandler);
app.listen(PORT, () => {
    console.log("server is running ", PORT);
});
