import { AppError } from "../../utils/AppError.js"
import { getPagingData } from "../../utils/pagination.js/pagination.js"
import { clearCart, getMyCart } from "../cart/cart.data.js"
import * as data from "./order.data.js"
export const createOrder=async(_id,address,phone,paymentType,coupon)=>{
    const cart=await getMyCart(_id)
    if(!cart||cart.products.length===0){
        return {
            message:"cart is empty",
        }
    }
    let totalPrice=0
    const products=cart.products.map((product)=>{
        const itemTotal=product.price*product.qnt
        totalPrice+=itemTotal
        return {
            productId:product.productId,
            qnt:product.qnt,
            price:product.price,
            finalPrice:itemTotal
        }
    })
    const order=await data.createOrder({
        userId:_id,
        products,
        totalPrice,
        address,
        phone,
        paymentType,
    })
    await clearCart(_id)
    return{
        message:"order created successfully",
        order,
    }
}
export const getMyOrders=async(id,skip,page,limit)=>{
    const myOrders= await data.getMyOrders(id,skip,limit)
    if(!myOrders||myOrders.length===0){
        return {
            message:"you have no orders",
        }
    }
    const pageData =getPagingData(myOrders,page,limit)
    return {
        message:"my orders",
        pageData,
    };
}
export const getOrderById=async(id,userId)=>{
    const order=await data.getOrderById(id,userId) 
    if(!order){
        return new AppError(404,"order not found")
    }
    return order
}
export const getAllOrders=async(skip,page,limit,status)=>{
    const allOrders=await data.getAllOrders(skip,limit,status)
    if(!allOrders||allOrders.length===0){
        return {
            message:"no orders found",
        }
    }
    const pageData =getPagingData(allOrders,page,limit)
    return {
        message:"orders",
        pageData,
    };
}
export const updateOrderStatus=async(id,status)=>{
    const orderStatuses=["pending","onway","confirmed","delivered","cancalled"]
    if(!orderStatuses.includes(status)){
        throw new AppError(400,`status must be one of the following: ${orderStatuses.join(", ")}`)
    }
    const order=await data.getOrderByIdForAdmin(id)
    if(!order){
        throw new AppError(404,"order not found")
    }

    return await data.updateOrderStatus(id,status)
}