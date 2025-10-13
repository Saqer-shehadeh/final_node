import { Router } from "express";

import asyncHandler from "../../utils/asyncHandler.js"
import * as controller from "./order.controller.js"
import authenticateJWT from "../../middlewares/authMiddleware.js"
import ROLES from "../../../dataBase/roles.js"
const orderRouter = Router()

orderRouter.post("/add", authenticateJWT([ROLES.USER]), asyncHandler(controller.createOrder))
orderRouter.get("/myorders", authenticateJWT([ROLES.USER]), asyncHandler(controller.getMyOrders))
orderRouter.get("/myorders/:id", authenticateJWT([ROLES.USER]), asyncHandler(controller.getOrderById))
orderRouter.get("/all", authenticateJWT([ROLES.USER]), asyncHandler(controller.getAllOrders))/* only admin,   user for test*/
orderRouter.patch("/update/:id", /*authenticateJWT([ROLES.ADMIN]),*/ asyncHandler(controller.updateOrderStatus))
export default orderRouter;