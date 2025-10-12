import areAtributesSame from "../../utils/areAttributesSame.js"
import { getProductById } from "../product/product.data.js"
import * as data from "./cart.data.js"


export const addToCart=async(id,body)=>{
    const cart =await data.findCartByUserId(id)
    if(!cart){
        const newCart=await data.createCart(id,body)
        return {
            newCart:true,
            added:true,
            message:"cart created and product added",
        }
    }
    const productIndex=cart.products.findIndex((product)=>{
        return (
            product.productId.toString()===body.productId.toString()&&
            areAtributesSame(product.attributes,body.attributes)
        )
    })    
    if(productIndex>-1){
        
        cart.products[productIndex].qnt+=1;
        await cart.save()
        return {
        newCart:false,
        added:true,
        message:"add new quantity to existing product",
        }
    }else{
        cart.products.push(body)
        await cart.save()
    }
    return {
        newCart:false,
        added:true,
        message:"product added to cart",
    }
}
export const getMyCart=async(id)=>{
    const cart=await data.getMyCart(id)
    if(!cart){
        return {
            message:"cart is empty",
        }
    }
    return cart

}
export const clearCart=async(id)=>{
  
    return await data.clearCart(id)

}
export const updateQuantity=async(id,productId,qnt)=>{ 
    if (qnt<=0){
        return {
            message:"quantity must be greater than 0",
        }
    }else{
        const updated=await data.updateQuantity(id,productId,qnt)
        return updated.modifiedCount>0

    }
}
export const removeFromCart=async(id,productId)=>{
        const deleted=await data.removeFromCart(id,productId)
        return deleted.modifiedCount>0
}


