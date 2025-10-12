import * as data from "./favorite.data.js";
import {getProductById} from "../product/product.data.js"
import { AppError } from "../../utils/AppError.js";
export const addToFavorite = async (id, productId) => {
    const product = await getProductById(productId);
    if (!product) {
        throw new AppError("product not found", 404);
    }
    let favorite = await data.findFavoriteByUserId(id);
    if (!favorite) {
         await data.createFavorite(id, productId)
        return {
            newFavorite: true,
            added: true,
            message: "favorite created and product added to favorite",
        }
    }
    const addToFavorite=data.addToFavorite(id,productId)
    if(addToFavorite.modifiedCount>0){
        return {
            newFavorite: false,
            added: true,
            message: "product added to favorite",
        }
    }

}
export const getMyFavorites = async (id) => {
    const favorite = await data.findFavoriteByUserId(id);
    if (!favorite) {
        throw new AppError("you have no favorites", 404);
    }
    return favorite;
}

export const removeFromFavorite = async (userId, productId) => {
    const favorite = await data.findFavoriteByUserId(userId);
    if (!favorite) {
        throw new AppError("you have no favorites", 404);
    }
    await data.removeFromFavorite(userId, productId);
    return{
        message: "product removed from favorite"
    };
}

export const clearFavorites = async (userId) => {
    const favorite = await data.findFavoriteByUserId(userId);
    if (!favorite) {
        return true;
    }
    await data.clearFavorites(userId);
    return true;
}