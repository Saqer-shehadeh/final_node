import Joi from "joi";


export const login=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(8).required()
})

export const register=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(8).required(),
    userName:Joi.string().trim().min(3).max(50).required()

})
export const confirmEmail=Joi.object({
    email:Joi.string().email().required(),
    code:Joi.string().length(4).required()
})
