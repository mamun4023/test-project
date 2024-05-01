import {Request, Response, NextFunction} from 'express'

interface ErrorTypes{
    statusCode : number,
    status : string,
    message : string
}

const globalErrorHandler = ((error: ErrorTypes, req: Request, res: Response, next: NextFunction)=>{
    
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error',
    res.status(error.statusCode).json({
        status : error.status,
        message : error.message
    })
})

module.exports = globalErrorHandler