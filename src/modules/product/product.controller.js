import createImageObj from "../../utils/images/createImageObj.js"
import { getPagination } from "../../utils/pagination.js/pagination.js"
import * as service from "./product.service.js"
export const createProduct=async(req,res,next)=>{
    const files=req.files
    const mainImage=createImageObj(files.mainImage[0])
    let subImages=[];
    if(files.subImages && files.subImages.length >0){
        subImages=files.subImages.map((file)=>createImageObj(file))
    }
    const product=await service.createProduct({...req.body,mainImage,subImages})

    return res.status(201).json({
        message:"success",
        product
    })
}
export const getAll=async(req,res,next)=>{
    const {page,limit,skip}=getPagination(req)
    const allProducts=await service.getAll(page,limit,skip);
    return res.status(201).json({
        message:"success",
        allProducts
    })
}
export const getProductById=async(req,res,next)=>{
    const id=req.params.id
    const product=await service.getProductById(id)

    return res.status(200).json({
        message:"success",
        product
    })
}
export const updateProduct=async(req,res,next)=>{
    const id=req.params.id
    const product=await service.updateProduct(id,req.body)
    return res.status(200).json({
        message:"update product",
        product
    })
}
export const deleteProduct=async(req,res,next)=>{
    const id=req.params.id
    const product=await service.deleteProduct(id)
    return res.status(200).json({
        message:"delete product",
        product
    })
}  