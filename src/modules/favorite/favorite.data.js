import {FavoriteModel} from "../../../dataBase/models/favorite.model.js"
export const createFavorite=async(userId,productId)=>{
    return await FavoriteModel.create({userId,products:[productId]})
}
export const findFavoriteByUserId=async(id)=>{
    return await FavoriteModel.findOne({userId:id}).populate("products","name mainImage.url price -_id")
}
export const addToFavorite=async(userId,productId)=>{
    return await FavoriteModel.updateOne({userId:userId},{
        $addToSet:{products:productId}
    })
}
export const removeFromFavorite=async(userId,productId)=>{
    return await FavoriteModel.updateOne({userId:userId},{
        $pull:{products:productId}
    })
}
export const clearFavorites=async(userId)=>{
    return await FavoriteModel.updateOne({userId:userId},{
        $set:{products:[]}
    })
}