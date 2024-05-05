import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
const catchError = require("../errorHandlers/catchError");

interface DecodedToken extends JwtPayload {
    userId: string;
}
declare global {
    namespace Express {
        interface Request {
            user?: DecodedToken;
        }
    }
}

const Authenticated = async (req: Request, res: Response, next: NextFunction) => {
    const bearerToken = req.headers["authorization"];

    if (!bearerToken) return next(new catchError("Please provide secret token", 404));
    const token = bearerToken.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded: DecodedToken) => {
        if (err) {
            next(new catchError("Invalid token", 404));
            return;
        }
        req.user = decoded;
        next();
    });
};

module.exports = Authenticated;
