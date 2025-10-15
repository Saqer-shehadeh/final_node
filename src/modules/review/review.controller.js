import * as service from "./review.service.js"

export const createReview=async(req,res)=>{
const{productId,comment}=req.body
const{_id}=req.user
const review =await service.createReview({productId,comment,userId:_id})
res.status(201).json({
    message:"review created",
    review
})
}
export const getAllReviewsForProduct=async(req,res)=>{
    const {productId}=req.params
    const reviews=await service.getAllReviewsForProduct(productId)
    res.status(200).json({
        message:"all reviews for this product",
        reviews
    })
    }