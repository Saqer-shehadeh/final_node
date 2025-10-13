import Joi from "joi";
import objectId from "./objectId.validator";


export const create=Joi.object({
    phone:Joi.string().trim().required(),
    address:Joi.string().trim().min(2).max(50).required(),
    paymentType:Joi.string().valid("cash","card").required(),
    coupon:objectId.optional()
});
export const updateStatus=Joi.object({
    status:Joi.string().valid("pending","onway","confirmed","delivered","cancalled").required()
})
export const getOrderById=Joi.object({
    id:objectId.optional()
})