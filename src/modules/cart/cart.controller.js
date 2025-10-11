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