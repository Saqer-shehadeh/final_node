import areAtributesSame from "../../utils/areAttributesSame.js"
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
    console.log(productIndex);
    
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