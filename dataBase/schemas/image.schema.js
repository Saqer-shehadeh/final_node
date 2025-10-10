
import mongoose from "mongoose";

export const imageSchema=mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true
    }
},{
    _id:false
})