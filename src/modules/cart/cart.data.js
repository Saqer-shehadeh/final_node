
import {CartModel} from "../../../dataBase/models/cart.model.js";
export const findCartByUserId=async(id)=>{
    return await CartModel.findOne({userId:id})
}
export const createCart=async(id,body)=>{
    return await CartModel.create({userId:id,products:[body]})
}