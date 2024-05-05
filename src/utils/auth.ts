
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')


export const generateToken = async (user) => {
    const token = await jwt.sign({ _id: user?._id, email: user?.email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    })
    return token
}


export const passwordMatching = async (savedPassword, givenPassword) => {
    return await bcrypt.compare(savedPassword, givenPassword)
}