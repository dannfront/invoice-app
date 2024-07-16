import { promisify } from 'util'
import jwt from 'jsonwebtoken'
import User from "../models/userModel.js";

const sendToken = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })

function sendResponse(req,res,user){
    const token=sendToken(user.id)
    
    const optionCookie={
        maxAge:24*60*60*1000,
        httpOnly:true,
        secure:false
    }

    res.cookie("jwt",token,optionCookie)
    user.password=undefined
    res.status(200).json({
        status:"succes",
        token,
        user
    })

}


export async function loginController(req, res, next) {

    const { email, password } = req.body

    if (!email || !password) {
        const err = new Error("email and password is required")
        err.status = 400
        return next(err)
    }

    const user = await User.findOne({ email })
    
    if (!user) {
        const err = new Error("the email has not been registered")
        err.status = 400
        return next(err)
    }

    if (! await user.comparePassword(password, user.password)) return next("Password is incorrect")
    
    sendResponse(req,res,user)
}

export async function registerController(req, res, next) {
    const { email, password } = req.body

    const isUser = await User.findOne({ email })

    if (isUser) return next("Email is already in use")

    if (!(password.length >= 8)) return next("The password must be greater than 8 characters")

    const user = await User.create(req.body)


    sendResponse(req,res,user)


}

export async function protectRoute(req, res, next) {
    
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }else if(req.cookies&&req.cookies.jwt){
        token=req.cookies.jwt
    }

    if (!token) return next('you need to log in to access')
    
    const verifiAsync = promisify(jwt.verify)
    const { id } = await verifiAsync(token, process.env.JWT_SECRET)
    const user = await User.findById(id)

    if (!user) return next('User does not exist')

    req.user = user
    next()
}

export function isVerifed(req,res){
    res.status(200).json({
        status:"succes",
        message:"the user is authenticated"
    })
}