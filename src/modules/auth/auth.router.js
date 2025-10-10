import {Router} from "express"
import * as controller from './auth.controller.js'
import asyncHandler from "../../utils/asyncHandler.js"

const authrouter=Router()

authrouter.post("/register",asyncHandler(controller.register))
authrouter.post("/login",asyncHandler(controller.login))
authrouter.post("/confirmeEmail",asyncHandler(controller.confirmeEmail))

export default authrouter