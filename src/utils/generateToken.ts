
const jwt = require("jsonwebtoken")

console.log("jwt", process.env.JWT_SECRET)

const generateToken = async (user) => {
    const token = await jwt.sign({ _id: user?._id, email: user?.email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    })
    return token
}

module.exports = generateToken