import {CouponModel} from "../../../dataBase/models/coupon.model.js"

export const getCouponByCode=async(code)=>{    
    return await CouponModel.findOne({code})
}

export const createCoupon=async(body)=>{
    return await CouponModel.create(body)
}