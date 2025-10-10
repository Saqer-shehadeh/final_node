import {getCategoryById}from "../modules/category/category.data.js"
import {AppError} from "./AppError.js"
export const validateAttributes=async(categoryId,attributes)=>{
    const category=await getCategoryById(categoryId)
    if(!category){
        throw new AppError("category not found")
    }
    const attributesByName={};
     category.attributes.forEach((attr=>{
        attributesByName[attr.name]=attr;
     }))
     for(const attr of attributes){
        const categoryAttribute=attributesByName[attr.name]
        if(!categoryAttribute)return false
        const values =attr.value
        if(!Array.isArray(values))return false
        
        for(const val of values){
            if(categoryAttribute.type==="string"&&val.type!="string")return false            
            if(categoryAttribute.type==="number" && val.type!="number")return false
            if(categoryAttribute.type==="enum"){
                if(categoryAttribute.allowCustomValue){
                    if(typeof val!="string")return "false"
                }else {  
                    if(!categoryAttribute.options.includes(val))return false
                }

            }
        }

     }
     return true;
}