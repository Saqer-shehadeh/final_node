import { AppError } from "../../utils/AppError.js";
import * as authQuery from './auth.data.js'
import * as bcrypt from '../../utils/crypt.js'
import { generateToken } from "../../utils/jwt/generetetoken.js";
import generateCode from "../../utils/generateDoce.js";
import { sendEmail } from "../../utils/mail/nodemailer.js";
import ROLES from "../../../dataBase/roles.js";
export const register = async ({ userName, email, password ,role=ROLES.USER}) => {
    const existingUser = await authQuery.findUserByEmail(email);
    if (existingUser) {
        throw new AppError("email exist", 409)
    }
    if (!userName || !email || !password) {
        throw new AppError("missing required fields", 400)
    }
    const hashedPassword = await bcrypt.hash(password)
    const code = generateCode(4)
    await sendEmail({
        to:email,
        subject:"confirme",
        html:`your code ${code}`
    })
    const newUser = await authQuery.createUser({ userName, email, password: hashedPassword, code,role})
    return {
        userName: newUser.userName,
        email: newUser.email,


    }
}
export const login = async ({ email, password }) => {
        const user = await authQuery.findUserByEmail(email)
    if (!user) {
        throw new AppError("invalid credentials", 401)
    }
    if(!user.confirmEmail){
        throw new AppError("must confirm email", 401)

    }
    const isMatch = await bcrypt.compareHash(password, user.password)
    if (!isMatch) {
        throw new AppError("wrong credentials", 404)
    }
    const token = generateToken({
        id: user.id,
        name: user.name,
        email: user.email,
    });
    return token

}

export const confirmeEmail=async({email,code})=>{
        if (!email || !code) {
        throw new AppError("email and code are required", 400);
    }

    const user=await authQuery.findUserByEmail(email)
    if(!user){
        throw new AppError("user not found",404)
    }
    if(user.confirmEmail){
           throw new AppError("already confirmed",404)
    }
    if(user.code!==code){
        throw new AppError("invalid code ",400)
    }
    await authQuery.confirmeEmail(email)
    return true
}


