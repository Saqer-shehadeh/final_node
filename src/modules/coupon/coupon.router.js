
import { Router } from "express";

import asyncHandler from "../../utils/asyncHandler.js"
import * as controller from "./coupon.controller.js"
import authenticateJWT from "../../middlewares/authMiddleware.js"
import ROLES from "../../../dataBase/roles.js"
const couponRouter = Router()

couponRouter.post("/add", /*authenticateJWT([ROLES.ADMIN]),*/ asyncHandler(controller.createCoupon))



export default couponRouter;