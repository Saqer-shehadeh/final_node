import mongoose from "mongoose"
import { AppError } from "../../utils/AppError.js"
import createImageObj from "../../utils/images/createImageObj.js"
import * as data from "./category.data.js"
import deleteImageFile from "../../utils/images/deleteImageFile.js"

export const addCategory=async(Body)=>{
    const exists=await data.existsCategoryByName(Body.name)
    if(exists){
        throw new AppError("category already exists",400)
    }
    const image=createImageObj(Body.image)
    if(image){
        Body.image=image
    }
    const category=await data.createCategory(Body)
    return category
}

export const getAllCategories=async()=>{
    const categories=await data.getAllCategories()
    if(!categories|| categories.length ===0){
        throw new AppError("no categories",404)
    }
    return categories
}

export const getCategoryById=async(id)=>{
    const mongoId=new mongoose.Types.ObjectId(id)
    const category=await data.getCategoryById(mongoId)
    if(!category){
        throw new AppError("no category found",404)
    }
    return category
}

export const updateCategory=async(id,body,file)=>{

    const category=await data.getCategoryById(id)
    if(!category){
        throw new AppError("no category found",404)

    }
    if(file){

        const image=createImageObj(file)
          if(image){
        body.image=image
    }
    if(category.image?.name){
        await deleteImageFile(category.image)
    }

    }
  
    const updated=await data.updateCategory(id,body)
    if (!updated){
        throw new AppError("something went wrong",500)
    }
    return updated;
}

export const deleteCategory=async(id)=>{
    const category=await data.getCategoryById(id)
    if(!category){
        throw new AppError("no category found",404)
    }
    if(category.image?.name){
        await deleteImageFile(category.image)
    }
    const deleted=await data.deleteCategory(id);
    if(!deleted){
        throw new AppError("deleted failed",500)
    }
    return deleted
}