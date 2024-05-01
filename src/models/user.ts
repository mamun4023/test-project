
import { Schema, model } from "mongoose"
const bcrypt = require("bcrypt")

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true,
            validate: [
                function (email: string) {
                    let emailRegex =
                        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                    return emailRegex.test(email)
                },
                "The e-mail is invalid.",
            ],
            trim: true,
            lowercase: true,
        },
        password: {
            type : String
        }
   
    },
    { timestamps: true }
)

userSchema.pre("save", async function (next) {
    const user = this

    if (!user.isModified("password")) {
        return next()
    }
    try {
        user.password = await bcrypt.hash(user.password, 10)
        next()
    } catch (error) {
        return next(error)
    }
})

module.exports = model("User", userSchema)
