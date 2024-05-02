import { Response } from 'express'

type Props = {
    res: Response,
    message: string,
    statusCode: number,
    data: [] | object
}

const successResponse = ({ res, message = "Success", statusCode = 200, data }: Props) => {
    return res.status(statusCode).json({
        success: true,
        message: message,
        data: data
    })
}

module.exports = successResponse