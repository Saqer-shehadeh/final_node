import {ProductModel} from "../../../dataBase/models/product.model.js"

export const createProduct=async(data)=>{
    return await ProductModel.create(data)
}
export const getAll=async(limit,skip)=>{
    const products= await ProductModel.find().select("category name price discount finalPrice mainImage")
    .populate("category","name -_id")
    .limit(limit).skip(skip)

    const count=await ProductModel.countDocuments()
    return{
        count,
        results:products
    }
}
export const getProductById=async(id)=>{
    return await ProductModel.findById(id).populate("category","name -_id").populate("subCategory","name -_id").lean()
}