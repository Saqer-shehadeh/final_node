import path from "path"
import Upload_DIR from "../../../config.js"
import { AppError } from "../AppError.js"
import fs from "fs"
const deleteImageFile=async(image)=>{
    if(image?.name){
        const imagePath=path.join(Upload_DIR,image.name)
        try {
            await fs.promises.access(imagePath)
            await fs.promises.unlink(imagePath)
        } catch (error) { 
            throw new AppError("error deleting image file",500);
            
            
        }
    }
}
export default deleteImageFile