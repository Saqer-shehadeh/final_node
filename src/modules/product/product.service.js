import { AppError } from "../../utils/AppError.js"
import { validateAttributes } from "../../utils/validateAttributes.js"
import * as data from "./product.data.js"
import {getSubCategoryForProduct}from "../subcategory/subcategory.data.js"
import { getPagingData } from "../../utils/pagination.js/pagination.js"
import objectId from "../../validation/objectId.validator.js"
export const createProduct=async(body)=>{

    const isValid=validateAttributes(body.category,body.attributes)
     if(!isValid)throw new AppError("invalid attributes ",400)
    const subCategory=await getSubCategoryForProduct(body.category,body.subCategory)
if(!subCategory)throw new AppError("invalid subCategory for this category",400)
    
    if(body.discount>0){
        body.finalPrice=body.price*(1-body.discount/100)
    } 
    const product =await data.createProduct(body)
    return product
}

export const getAll=async(page,limit,skip)=>{
const products= await data.getAll(limit,skip);
if(products.count===0)throw new AppError("no products found",404)
const paginated=getPagingData(products,page,limit)
return paginated
}
export const getProductById=async(id)=>{
    const validId=objectId(id)
    if(!validId)throw new AppError("invalid id",400)
    const product=await data.getProductById(id)
    if(!product)throw new AppError("no product found",404)
    return product
}