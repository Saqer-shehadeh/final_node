import * as service from "./favorite.service.js"
export const addToFavorite=async(req,res)=>{
    const{_id}=req.user
    const {productId}=req.body
    await service.addToFavorite(_id,productId)
    res.status(200).json({
        message:"add to favorite",

        
    })
}
export const getMyFavorites=async(req,res)=>{
    const{_id}=req.user
    const favorites=await service.getMyFavorites(_id)
    res.status(200).json({
        message:"my favorites",
        favorites
    })
}

export const removeFromFavorite=async(req,res)=>{
    const{_id}=req.user
    const {id}=req.params
    
    await service.removeFromFavorite(_id,id)
    res.status(200).json({
        message:"product removed from favorite"
    })
}
export const clearFavorites=async(req,res)=>{
    const{_id}=req.user
    await service.clearFavorites(_id)
    res.status(200).json({
        message:"all favorites cleared"
    })
}