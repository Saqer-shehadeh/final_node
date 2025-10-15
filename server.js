import express from "express"
import "dotenv/config"
import connectDB from "./dataBase/connection.js"
import init from "./src/routes/index.js"

const app=express()


init(express,app)

const PORT=process.env.PORT||3000
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("running on port 3000");
        
    })
})


