import { SubCategoryModel } from "../../../dataBase/models/subcategory.model.js"

export const createSubCategory=async(payload)=>{
    return await SubCategoryModel.create(payload)
}
export const getSubCategoryByCategoryId=async(payload)=>{
    const {name,categoryId}=payload
    const subCategory=await SubCategoryModel.exists({
        name,
        categoryId
    })
    return subCategory
}
export const getAllSubCategories=async()=>{
    return await SubCategoryModel.find();
}
export const getSubCategoryForProduct=async(categoryId,subId)=>{
    return await SubCategoryModel.findOne({
        _id:subId,
        categoryId
    })
}


export const getSubCategoriesByCategoryId=async(id)=>{
    return await SubCategoryModel.find({categoryId:id})
}

export const getSubCategoryById=async(subCategoryId)=>{
       const subCategory=await SubCategoryModel.findById(subCategoryId).lean().select(" name status")
    return subCategory
}

export const updateSubCategory=async(subCategoryId,updatedData)=>{
    const subCategory=await SubCategoryModel.findByIdAndUpdate(subCategoryId,updatedData,{
        new:true
    })
    return subCategory
}
export const deleteSubCategory=async(id)=>{
    return await SubCategoryModel.findByIdAndDelete(id)
}