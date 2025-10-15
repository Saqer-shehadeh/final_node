import { AppError } from "../../utils/AppError.js"
import * as data from "./coupon.data.js"
export const createCoupon=async(body)=>{
    const existingCoupon=await data.getCouponByCode(body.code)
    if(existingCoupon){
        throw new AppError("coupon code already exists",409)
    }
const coupon=await data.createCoupon(body)
return {
    message:"coupon created",
    coupon
}
}

export const getAllCoupons=async()=>{
    const coupons=await data.getAllCoupons()
    return coupons
}
export const updateCoupon=async(id,body)=>{
    const coupon=await data.updateCoupon(id,body)
    return coupon
}
export const deleteCoupon=async(id)=>{
    await data.deleteCoupon(id)
    return 
}