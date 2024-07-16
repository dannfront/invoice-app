import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt'
import { invoiceSchema } from "./invoiceModel.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 4,
        maxLength: 20,
    },
    password: {
        type: String,
        minLength: 8,
        required: [true, "the password is required"]
    },
    confirmPassword: {
        type: String,
        minLength: 8,
        required: [function () {
            return this.isNew
        }, 'the field is required'],
        validate: {
            validator: function (v) {
                // if(this.isModified('confirmPassword')) return
                if (this.password === v) return true
                return false
            },
            message: () => "the passwords must be the same"
        }
    },
    email: {
        type: String,
        required: [true, 'the email is required'],
        validate: {
            validator: (v) => validator.isEmail(v),
            message: (props) => `the ${props.value} is not valid`
        },
        unique: true

    },
    _skipMiddleware:{
        type:Boolean,
        default:false
    },
    invoice: [invoiceSchema]
})

userSchema.pre("save", async function (next) {

    if(this._skipMiddleware) return next()
    
    const passwordHash = await bcrypt.hash(this.password, 10)
    this.password = passwordHash
    this._skipMiddleware=true
    this.confirmPassword = undefined
    next()
})


userSchema.method('comparePassword', async function (currentPassword, passwordHash) {
    return await bcrypt.compare(currentPassword, passwordHash)
})

const User = mongoose.model('User', userSchema)


export default User