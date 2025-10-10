import * as authService from "./auth.service.js"

export const register=async (req,res,next)=>{
    const result=await authService.register(req.body)
    return res.status(201).json({msg:"succes",result})
}

export const login =async(req,res,next)=>{
    const result=await authService.login(req.body)
    return res.status(200).json({msg:"login succes", token : result})
}
export const confirmeEmail =async(req,res,next)=>{
    const {email,code}=req.body
    await authService.confirmeEmail(req.body);
    res.status(200).json({
        msg:"email confirmed"
    })

}