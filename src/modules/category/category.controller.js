import mongoose from "mongoose"
import { AppError } from "../../utils/AppError.js"
import * as service from "./category.service.js"


export const createCategory = async(req, res, next) => {
    if(!req.file){
        return next(new AppError("image not found",400))
    }

    const category=await service.addCategory({...req.body,image:req.file})
    res.status(201).json({
        message:"category created",
        category
    })
}

export const getAllCategories=async(req,res,next)=>{
    const categories=await service.getAllCategories()
    res.status(200).json({
        message:"succes",
        data:categories
    })
}

export const getCategoryById=async(req,res,next)=>{
    const category=await service.getCategoryById(req.params.id)
    res.status(200).json({
        message:"succes",
        category
    })
}
export const updateCategory=async(req,res,next)=>{
    try {
         const mongoId=new mongoose.Types.ObjectId(req.params.id)
         const updatedData=req.body;
    const updatedCategory=await service.updateCategory(mongoId,updatedData,req.file)
    res.status(200).json({
        message:"updated",
        updatedCategory
    })
    } catch (error) {
        next(error)
    }
    
}

export const deleteCategory=async(req,res,next)=>{
    const {id}=req.params
    await service.deleteCategory(id)
    res.status(200).json({
        message:"successfully deleted",
    })
}






