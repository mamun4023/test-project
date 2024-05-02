import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

const catchError = require("../errorHandlers/catchError");
const successResponse = require("../responseHandlers/successResponse");
const analyzerServices = require("../services/analyzer");

exports.add = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const text = req.body.text;

    if (!text) {
        next(new catchError("please enter text", 400));
    }

    const data = {
        numberOfWords: await analyzerServices.numberOfWords(text),
        numberOfCharacters: await analyzerServices.numberOfCharacters(text),
        longestWord: await analyzerServices.longestWord(text),
    };

    successResponse({ res, message: "success", data });
});
