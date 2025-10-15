import {CouponModel} from "../../../dataBase/models/coupon.model.js"

export const getCouponByCode=async(code)=>{    
    return await CouponModel.findOne({code})
}

export const createCoupon=async(body)=>{
    return await CouponModel.create(body)
}
export const getAllCoupons=async()=>{
    return await CouponModel.find().select("code discount validFrom validuntil")
}
export const updateCoupon=async(id,body)=>{
    return await CouponModel.findByIdAndUpdate(id,body,{new:true})
}
export const deleteCoupon=async(id)=>{
    return await CouponModel.findByIdAndDelete(id)
}