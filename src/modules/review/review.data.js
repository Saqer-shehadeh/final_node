import {ReviewModel} from "../../../dataBase/models/review.model.js"
export const getReviewByUserAndProduct=async(userId,productId)=>{
    return await ReviewModel.findOne({userId,productId})
}
export const createReview=async(body)=>{
    return await ReviewModel.create(body)
}
export const getAllReviewsForProduct=async(productId)=>{
    return await ReviewModel.find({productId})
}