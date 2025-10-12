import Joi from "joi"
import mongoose from "mongoose"
const objectId=()=>{
    return Joi.string().custom((value,helpers)=>{
        if(!mongoose.Types.ObjectId.isValid(value)){
            return helpers.message("invalid ObjectId")
        }
        return value
    },"Object Id Validation")
}
export default objectId