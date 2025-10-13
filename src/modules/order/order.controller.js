import { getPagination } from "../../utils/pagination.js/pagination.js"
import * as service from "./order.service.js"
export const createOrder=async(req,res,next)=>{
const {_id}=req.user
const {address,phone,paymentType,coupon}=req.body
const order=await service.createOrder(_id,address,phone,paymentType,coupon)
res.status(201).json({
    message:"order created",
    order
})

}
export const getMyOrders=async(req,res,next)=>{
    const {_id}=req.user
    const{skip,page,limit}=getPagination(req)
    const orders=await service.getMyOrders(_id,skip,page,limit)
    res.status(200).json({
        message:"my orders",
        orders
    })
}
export const getOrderById=async(req,res,next)=>{
    const {id}=req.params
    const {_id}=req.user
    const order=await service.getOrderById(id,_id)
    res.status(200).json({
        message:"get order by id",
        order
    })
}
export const getAllOrders=async(req,res,next)=>{
    const{skip,page,limit}=getPagination(req)
    const {status}=req.query
    const allOrders=await service.getAllOrders(skip,page,limit,status)
    res.status(200).json({
        message:"get all orders",
        allOrders
    })
}
export const updateOrderStatus=async(req,res,next)=>{
    const {id}=req.params
    const {status}=req.body
    const updatedOrder=await service.updateOrderStatus(id,status)
    res.status(200).json({
        message:"order status updated",
        updatedOrder
    })
}