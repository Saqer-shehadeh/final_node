import Joi from "joi";
import objectId from "./objectId.validator.js";
export const create=Joi.object({
    name:Joi.string().trim().min(2).max(50).required(),
    categoryId:objectId().required(),
    status:Joi.string().valid("active","inactive"),
    image:Joi.string()
})
export const update=Joi.object({
    name:Joi.string().trim().min(2).max(50),
    categoryId:objectId().required(),
    status:Joi.string().valid("active","inactive"),
    id:objectId().required(),
    
})
export const subCategoryIdParams=Joi.object({
    id:objectId().required(),
})


