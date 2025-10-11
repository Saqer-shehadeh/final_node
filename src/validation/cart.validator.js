import Joi from "joi";

export const create=Joi.object({
    productId:Joi.string().required(),
    qnt:Joi.number().min(1).required(),
    attributes:Joi.array().items(
        Joi.object({
            name:Joi.string().required(),
            value:Joi.alternatives().try(Joi.string(),Joi.number()).required()
        }
    ))
})