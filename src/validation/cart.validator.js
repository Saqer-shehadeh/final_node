import Joi from "joi";
import objectId from "./objectId.validator.js";
export const create=Joi.object({
    productId:objectId().required(),
    attributes:Joi.array().items(
        Joi.object({
            name:Joi.string().required(),
            value:Joi.alternatives().try(Joi.string(),Joi.number()).required()
        }
    )).optional(),
})


export const updateQuantity=Joi.object({
    productId:objectId().required(),
    qnt:Joi.number().required(),
})
