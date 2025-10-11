
import { CartModel } from "../../../dataBase/models/cart.model.js";
export const findCartByUserId = async (id) => {
    return await CartModel.findOne({ userId: id })
}
export const createCart = async (id, body) => {
    return await CartModel.create({ userId: id, products: [body] })
}
export const getMyCart = async (id) => {
    return await CartModel.findOne({ userId: id }).select("-_id -userId -createdAt -updatedAt -__b").populate("products.productId", "name mainImage.url price")
}
export const clearCart = async (id) => {
      const cart=await findCartByUserId(id) 
      
    if(cart.products.length===0){
        return {
            message:"cart is already empty",
        }
    }
    return await CartModel.updateOne({ userId: id }, {
        $set: { products: [] }
    })
}