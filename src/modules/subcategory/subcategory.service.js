import mongoose from "mongoose"
import { AppError } from "../../utils/AppError.js"
import { existsCategoryById } from "../category/category.data.js"
import * as data from "./subcategory.data.js"


export const createSubCategory=async(payload)=>{
    const category=await existsCategoryById(payload.categoryId)
    console.log(payload.categoryId);
    if(!category){
        throw new AppError("category not found",404)
    }
    const exists=await data.getSubCategoryByCategoryId(payload)
    if(exists){
        throw new AppError("subcategory already exists",404)
    }
    const subCategory=await data.createSubCategory(payload)
    return subCategory

}

export const getAllSubCategories=async()=>{
    const allSub=await data.getAllSubCategories();
        if(!allSub || allSub.length===0){
        throw new AppError("no sub categories found",404)
    }
    return allSub
}
export const getSubCategoriesByCategoryId=async(id)=>{
    const subCategories=await data.getSubCategoriesByCategoryId(id);
    if(!subCategories||subCategories.length===0){
         throw new AppError("no sub categories found",404)
    }
    return subCategories
}

export const getSubCategoryById=async(id)=>{
    const mongoId=new mongoose.Types.ObjectId(id)
    const Subcategory=await data.getSubCategoryById(mongoId)
    if(!Subcategory){
        throw new AppError("no subCategory found",404)
    }
    return Subcategory
}
export const updateSubCategory=async(id,body)=>{

    const subCategory=await data.getSubCategoryById(id)
    if(!subCategory){
        throw new AppError("no sub Category found",404)

    }
    const updated=await data.updateSubCategory(id,body)
    if (!updated){
        throw new AppError("something went wrong",500)
    }
    return updated;
}

export const deleteSubCategory=async(id)=>{
    const subCategory=await data.getSubCategoryById(id)
    if(!subCategory){
        throw new AppError("no subCategory found",404)
    }
    const deleted=await data.deleteSubCategory(id);
    if(!deleted){
        throw new AppError("deleted failed",500)
    }
    return deleted
}

