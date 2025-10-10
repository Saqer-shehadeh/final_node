import { CategoryModel } from "../../../dataBase/models/category.model.js";


export const createCategory=async(data)=>{
    const category=await CategoryModel.create(data)
    return category
}

export const existsCategoryByName=async(name)=>{
    const category=await CategoryModel.exists({name})
    return category
}
export const existsCategoryById=async(categoryId)=>{
    const category=await CategoryModel.exists({_id:categoryId})
        
    return category
}

export const getAllCategories=async()=>{
    return await CategoryModel.find({status:"active"})
}
export const getCategoryById=async(categoryId)=>{
       const category=await CategoryModel.findById(categoryId).lean().select(" name status attributes image")       
    return category

}
export const getCategoryByName=async(categoryName)=>{
    return await CategoryModel.findOne({name:categoryName})

}
export const updateCategory=async(categoryId,updatedData)=>{
    const category=await CategoryModel.findByIdAndUpdate(categoryId,updatedData,{
        new:true
    })
    return category
}
export const deleteCategory=async(id)=>{
    return await CategoryModel.findByIdAndDelete(id)
}