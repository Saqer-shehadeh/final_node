import { AppError } from "../../utils/AppError.js"
import * as data from "./review.data.js"
import { getProductById } from "../product/product.data.js"
export const createReview=async(body)=>{
    const existingReview=await data.getReviewByUserAndProduct(body.userId,body.productId)
    if(existingReview){
        throw new AppError("you have already review this product",409)
    }    
    return await data.createReview(body)
}
export const getAllReviewsForProduct=async(productId)=>{
    const product= await getProductById(productId)
    if(!product){
        throw new AppError("no product with this id",404)
    }
    
    return await data.getAllReviewsForProduct(productId)
}