import { findUserByEmail } from "../modules/auth/auth.data.js";
import { AppError } from "../utils/AppError.js";
import JWT from "jsonwebtoken"


 const authenticateJWT=(allowedRoles=[])=>{

    return async(req,res,next)=>{
        try {
                    const token=req.headers.authorization;
        if(!token){
            throw new AppError("missing token",402)
        }
        const decode=JWT.verify(token,process.env.JWT_SECRET)
        console.log(decode);
        
        const user=await findUserByEmail(decode.payload.email)
        if(!user){
            throw new AppError("user not found",400)
        }
        if(allowedRoles.length && !allowedRoles.includes(user.role)){
            throw new AppError("access denied")
        }
        req.user=user        
        next();
        } catch (error) {
            if(error.name==="JsonWebTokenError"||error.name==="TokenExpiredError")
                return next(new AppError("invalid or expired token",401))
            next(error)
        }
    }
}
export default authenticateJWT