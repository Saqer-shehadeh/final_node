import mongoose from "mongoose";
import { type } from "os";
import { imageSchema } from "../schemas/image.schema.js";

const categorySchema = new mongoose.Schema(
{
    name :{
        type:String,
        unique:true,
        required:true
    },
    image:{
        type:imageSchema,
        required:true,
    },
    status:{
        type:String,
        enum:["active","inactive"],
        default:"active"
    },
    attributes:[
        {
            name:{type:String,required:true},
            type:{
                type:["string","number","enum"],
                required:true
            },
            
            options:[String],
            allowCustomValue:{
                type:Boolean,
                default:true

                }
            
        }
    ]
},
{
    timestamps:true
}
)
export const CategoryModel= mongoose.model("Category",categorySchema)