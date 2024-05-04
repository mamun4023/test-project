import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

const catchError = require("../errorHandlers/catchError");
const successResponse = require("../responseHandlers/successResponse");
const userRepository = require("../repository/user");
const generateToken = require("../utils/generateToken");

exports.signUp = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const isExist = await userRepository.findUser(req.body.email);

    if (isExist) {
        next(new catchError("User already exist", 404));
        return;
    }
    const user = await userRepository.createUser(req.body);
    successResponse({ res, message: "created", statusCode: 200, data: user });
});

exports.signIn = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const existUser = await userRepository.findUser(req.body.email);

    if (!existUser) {
        next(new catchError("User doesn't exist!", 400));
        return;
    }

    const token = await generateToken(existUser);

    successResponse({ res, message: "Signin Successfull", statusCode: 200, data: { token, data: existUser } });
});
