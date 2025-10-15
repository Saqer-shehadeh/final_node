
import { Router } from "express";

import asyncHandler from "../../utils/asyncHandler.js"
import * as controller from "./coupon.controller.js"
import authenticateJWT from "../../middlewares/authMiddleware.js"
import ROLES from "../../../dataBase/roles.js"
const couponRouter = Router()

couponRouter.post("/add", /*authenticateJWT([ROLES.ADMIN]),*/ asyncHandler(controller.createCoupon))
couponRouter.get("/all", asyncHandler(controller.getAllCoupons))
couponRouter.patch("/:id",  /*authenticateJWT([ROLES.ADMIN]),*/asyncHandler(controller.updateCoupon))
couponRouter.delete("/:id", /*authenticateJWT([ROLES.ADMIN]),*/ asyncHandler(controller.deleteCoupon))
export default couponRouter;