import {OrderModel} from "../../../dataBase/models/order.model.js"
export const createOrder=async(data)=>{
    return await OrderModel.create(data)
}

export const getMyOrders=async(id,skip,limit)=>{
    const count=await OrderModel.countDocuments({userId:id})
    const orders= await OrderModel.find({userId:id}).sort({createdAt:-1}).select("-__v -updatedAt").skip(skip).limit(limit)

    return {
        count,
        results:orders,
    }
}
export const getOrderById=async(id,userId)=>{
    return await OrderModel.findOne({_id:id,userId}).select("-__v -updatedAt")
}
export const getAllOrders=async(skip,limit,status)=>{
    const count=await OrderModel.countDocuments({status})
    const orders= await OrderModel.find({status}).sort({createdAt:-1}).select("-__v -updatedAt").skip(skip).limit(limit)
    
    return {
        count,
        results:orders,
    }
}
export const getOrderByIdForAdmin=async(id)=>{
    return await OrderModel.findById(id).select("-__v -updatedAt")
}
export const updateOrderStatus=async(id,status)=>{
    return await OrderModel.findByIdAndUpdate(id,{status},{new:true}).select("-__v -updatedAt")
}