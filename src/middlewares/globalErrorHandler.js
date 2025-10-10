

const globalErrorHandler=(err,req,res,next)=>{
    return res.status(err.statusCode || 500).json({
        message:err.message || "internal server error",
    })
}
export default globalErrorHandler