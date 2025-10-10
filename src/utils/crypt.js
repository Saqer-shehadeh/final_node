import "dotenv/config"

import bcrypt from "bcrypt"
  export const hash=async(plain)=>{
    return await bcrypt.hash(plain,parseInt(process.env.SALT))

  }
  export const compareHash=async(plain,hashed)=>{
    return await bcrypt.compare(plain,hashed)
  }