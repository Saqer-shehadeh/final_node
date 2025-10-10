import mongoose from "mongoose"
import { imageSchema } from "../schemas/image.schema.js"

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    image:{
        type:imageSchema,
    },
    phone:{
        type:String,
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"]
    },
    address:{
        type:String
    },
    confirmEmail:{
        type:Boolean,
        default:false
    },
    status:{
        type:String,
        default:"active",
        enum:["active","inactive"]
    },
    code:{
        type:String,
        default:null
    }



},{
    timestamps:true
})

export const UserModel = mongoose.model("User",userSchema)