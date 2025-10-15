import * as service from "./coupon.service.js"
export const createCoupon=async(req,res)=>{
const coupon =await service.createCoupon(req.body)
res.status(201).json({
    message:"coupon created",
    coupon
})
}