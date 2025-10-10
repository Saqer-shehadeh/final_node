import mongoose from "mongoose"
import { AppError } from "../../utils/AppError.js"
import * as service from "./subcategory.service.js"


export const createSubCategory = async(req, res) => {
    const subCategory=await service.createSubCategory(req.body)
    res.status(201).json({
        message:"subCategory created",
        subCategory
    })
}
export const getAllSubCategories=async(req,res)=>{
    const allSub=await service.getAllSubCategories()

    res.status(200).json({
        message:"success",
        data:allSub
    })
}
export const getSubCategoriesByCategoryId=async(req,res)=>{
    const subCategories=await service.getSubCategoriesByCategoryId(req.params.id)
        res.status(200).json({
        message:"success",
        data:subCategories
    })

}
export const getSubCategoryById=async(req,res)=>{
        const Subcategory=await service.getSubCategoryById(req.params.id)
        res.status(200).json({
            message:"succes",
            Subcategory
        })
}

export const updateSubCategory=async(req,res,next)=>{
    try {
         const mongoId=new mongoose.Types.ObjectId(req.params.id)
         const updatedData=req.body;
    const updatedSubCategory=await service.updateSubCategory(mongoId,updatedData)
    res.status(200).json({
        message:"updated",
        updatedSubCategory
    })
    } catch (error) {
        next(error)
    }
    
}

export const deleteSubCategory=async(req,res,next)=>{
    const {id}=req.params
    await service.deleteSubCategory(id)
    res.status(200).json({
        message:"successfully deleted",
    })
}

