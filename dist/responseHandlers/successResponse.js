"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const successResponse = ({ res, message = "Success", statusCode = 200, data }) => {
    return res.status(statusCode).json({
        success: true,
        message: message,
        data: data
    });
};
module.exports = successResponse;
