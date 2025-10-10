import { customAlphabet } from "nanoid"


const generateCode=(length=6)=>{
    const nanoid=customAlphabet('123456789asdqwe',length)()
    return nanoid;

}

export default generateCode;