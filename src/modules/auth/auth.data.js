import { UserModel } from "../../../dataBase/models/user.model.js";

export const findUserByEmail=async(email)=>{
    const user=await UserModel.findOne({email})
    return user;
}
export const createUser=async(data)=>{
    const user=UserModel.create(data)
    return user;
}
export const confirmeEmail =async(email)=>{
    await UserModel.updateOne(
        {email},
        {$set:{code:null,confirmEmail:true}}
    )
}