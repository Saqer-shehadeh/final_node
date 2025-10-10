
export const getPagination=(req)=>{
    const page=parseInt(req.query.page)||1
    const limit=parseInt(req.query.limit)||5
    const skip=(page - 1)*limit
    return{page,limit,skip}
}
export const getPagingData=(data,page,limit)=>{
    const {count,results}=data;
    const totalPages=Math.ceil(count/limit)

    return {
        pagination:{
            totalPages,
            currentPage:page,
            limit
        },
        results
    }


}