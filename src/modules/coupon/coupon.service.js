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