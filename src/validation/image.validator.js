import Joi from "joi";
import { fileType } from "../middlewares/multer.middleware.js";

 const multerFileSchema =Joi.object({
    fieldname:Joi.string().required(),
    originalname:Joi.string().required(),
    encoding:Joi.string().required(),
    mimetype:Joi.string().valid(...fileType.images).required(),
    destination:Joi.string().required(),
    filename:Joi.string().required(),
    path:Joi.string().required(),
    size:Joi.number().required(),

})
export default multerFileSchema;