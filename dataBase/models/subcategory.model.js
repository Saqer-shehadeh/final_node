import mongoose from "mongoose";

const subCategorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,

    },

    status:{
        type:String,
        default:"active",
        enum:["active","inactive"]
    },
    categoryId:{
        type:mongoose.Types.ObjectId,
        ref:"Category",
        required:true,
    }
},
{
    timestamps:true
}
)
export const SubCategoryModel=mongoose.model("SubCategory",subCategorySchema)