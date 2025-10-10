import multer from "multer";
import path from "path";
import fs from "fs"
import Upload_DIR from "../../config.js";

export const fileType={
    images:["image/png","image/jpg"],
    files:["application/zip"]
}

const uploadPath=Upload_DIR
if(!fs.existsSync(uploadPath)){
    fs.mkdirSync(uploadPath)
}
const storage=multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,uploadPath)
    },
    filename:function(req,file,cb){
        const ext=path.extname(file.originalname)
        const uniqueName=`${file.originalname}-${Date.now()}-${Math.round(Math.random()*1E9)}${ext}`
        cb(null,uniqueName)
    }
    
})

    function fileFilter(req,file,cb){
        const alltypes=[...fileType.images,...fileType.files]
        if(alltypes.includes(file.mimetype)){
            cb(null,true)
        }
        else{
            cb(new Error("invalid format"))
        }


    }

const upload =multer({storage:storage,fileFilter:fileFilter})

export default upload;