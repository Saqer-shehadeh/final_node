import express from "express"
import "dotenv/config"
import connectDB from "./dataBase/connection.js"
import init from "./src/routes/index.js"

const app=express()


init(express,app)

connectDB().then(()=>{
    app.listen(3000,()=>{
        console.log("running on port 4000");
        
    })
})


