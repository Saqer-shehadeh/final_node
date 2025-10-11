import * as service from "./cart.service.js"



export const addToCart=async(req,res)=>{
    const{_id}=req.user
    const data=req.body
    const result=await service.addToCart(_id,data)
    res.status(200).json({
        message:"add to cart",
        result
    })
}
export const getMyCart=async(req,res)=>{
    const{_id}=req.user
    const result=await service.getMyCart(_id)
    res.status(200).json({
        message:"my cart",
        result
    })
}
export const clearCart=async(req,res)=>{
    const{_id}=req.user
    const result=await service.clearCart(_id)
    res.status(200).json({
        message:"cart cleared",
        result
    })

}
