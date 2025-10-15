import e from "express"
import * as service from "./coupon.service.js"
export const createCoupon=async(req,res)=>{
const coupon =await service.createCoupon(req.body)
res.status(201).json({
    message:"coupon created",
    coupon
})
}
export const getAllCoupons=async(req,res)=>{
    const coupons=await service.getAllCoupons()
    res.status(200).json({
        message:"all coupons",
        coupons
    })
    }
    export const updateCoupon=async(req,res)=>{
         const coupon =await service.updateCoupon(req.params.id,req.body)
        res.json({
            message:"update coupon"
        })
    }
    export const deleteCoupon=async(req,res)=>{
        await service.deleteCoupon(req.params.id)
        res.json({
            message:"delete coupon"
        })
    }