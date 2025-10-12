
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
export const updateQuantity = async (userId, productIndex, qnt) => {
    return await CartModel.updateOne({ userId: userId ,"products._id":productIndex},{
        $set: { "products.$.qnt": qnt }
    })
};
export const removeFromCart=async(userId,productId)=>{
    return await CartModel.updateOne({userId:userId},{
        $pull:{products:{_id:productId}}
    })
}