import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


// Login User 

const loginUser = async (req, res) => {

}


// Token
const createToken = (id) => {
    return jwt.sign({ id },process.env.JWT_SECRET)
}


// Register User 
const registerUser = async (req, res) => {

    const { name, email, password } = req.body
    try {
        // Checking is User email already exist...
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }

        // Validating Email and Strong Password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })

        }

        // Hashed user password
        const salt = await bcrypt.genSalt(10)
        const hasehedPassword = await bcrypt.hash(password, salt)

        // Create a new User
        const newUser = new userModel({
            name: name,
            email: email,
            password: hasehedPassword
        })


        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}


export { loginUser, registerUser }