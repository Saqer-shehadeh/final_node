import express from "express"
import asyncHandler from "../../utils/asyncHandler.js"
import * as controller from "./cart.controller.js"
import  authenticateJWT  from "../../middlewares/authMiddleware.js"
import ROLES from "../../../dataBase/roles.js"
import { validate } from "../../middlewares/validationMiddleware.js"
import * as schemas from "../../validation/cart.validator.js"
const cartRouter=express.Router()

cartRouter.post("/add",authenticateJWT([ROLES.USER]),asyncHandler(controller.addToCart))
cartRouter.get("/mycart",authenticateJWT([ROLES.USER]),asyncHandler(controller.getMyCart))
cartRouter.delete("/clear",authenticateJWT([ROLES.USER]),asyncHandler(controller.clearCart))
cartRouter.patch("/updateQuantity",authenticateJWT([ROLES.USER]),asyncHandler(controller.updateQuantity))
cartRouter.delete("/remove",authenticateJWT([ROLES.USER]),asyncHandler(controller.removeFromCart))









export default cartRouter