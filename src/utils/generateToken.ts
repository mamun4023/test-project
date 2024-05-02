
const jwt = require("jsonwebtoken")

const generateToken = async (user) => {
    const token = await jwt.sign({ _id: user?._id, email: user?.email }, "secret", {
        expiresIn: '1h',
    })
    return token
}

module.exports = generateToken