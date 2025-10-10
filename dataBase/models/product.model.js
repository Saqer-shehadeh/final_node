import mongoose from "mongoose";
import { imageSchema } from "../schemas/image.schema.js";

const productSchema = new mongoose.Schema(
{
    name :{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true,
        min:0,
        max:50
    },
    category:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"Category"
    },
        subCategory:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"SubCategory"
    },
    attributes:[{
        name:{type:String,required:true},
        value:[
            {
                type:mongoose.Schema.Types.Mixed,
                required:true
            }
        ],
        _id:false
    }
    ],
    finalPrice:{
        type:Number,

    },
    mainImage:{
        type:imageSchema,
        required:true
    },
    subImages:
    {
        type:[imageSchema],
        default:[]
    },
    stock:{
        type:Number,
        required:true,
        min:0
    }

},
{
    timestamps:true
}
)
export const ProductModel= mongoose.model("Product",productSchema)