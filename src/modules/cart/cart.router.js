import express from "express"
import asyncHandler from "../../utils/asyncHandler.js"
import * as controller from "./cart.controller.js"
import  authenticateJWT  from "../../middlewares/authMiddleware.js"
import ROLES from "../../../dataBase/roles.js"

const cartRouter=express.Router()

cartRouter.post("/add",authenticateJWT([ROLES.USER]),asyncHandler(controller.addToCart))













export default cartRouter