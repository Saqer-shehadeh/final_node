import Upload_DIR from "../../../config.js"

const createImageObj=(file)=>{
    if(!file){
        return null
    }
    return{
        url:`${Upload_DIR}/${file.filename}`,
        name:file.filename,
        type:file.mimetype
    }
}

export default createImageObj