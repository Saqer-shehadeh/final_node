import Joi from "joi";
import objectId from "./objectId.validator.js";
import multerFileSchema from "./image.validator.js";

export const create=Joi.object({
    name:Joi.string().min(3).max(50).required(),
    description:Joi.string().allow(""),
    price:Joi.number().positive().min(1).required(),
    discount:Joi.number().min(0).max(90),
    category:objectId().required(),
    subCategory:objectId().required(),
    attributes:Joi.array().items(
        Joi.object({
            name:Joi.string().required(),
            value:Joi.array().items(
                Joi.alternatives().try(Joi.string(),Joi.number()).required()
            )

        })
    ),
    mainImage:multerFileSchema.required(),
    subImages:Joi.array().items(
        multerFileSchema
    ).optional(),
    stock:Joi.number().min(1).required(),
    image:Joi.allow("")
})
export const update=Joi.object({
    name:Joi.string().min(3).max(50),
    description:Joi.string().allow(""),
    price:Joi.number().positive().min(1),
    discount:Joi.number().min(0).max(90).optional(),
    category:objectId(),
    subCategory:objectId(),
    attributes:Joi.array().items(
        Joi.object({
            name:Joi.string().required(),
            value:Joi.array().items(
                Joi.alternatives().try(Joi.string(),Joi.number()).required()
            )
    
    
    
    ,})),
    mainImage:multerFileSchema,
    subImages:Joi.array().items(multerFileSchema).optional(),
    stock:Joi.number().min(1),
    image:Joi.allow(""),
    id:objectId().required()
})
export const getById=Joi.object({
    id:objectId().required()
})
export const deleteById=Joi.object({
    id:objectId().required()
})