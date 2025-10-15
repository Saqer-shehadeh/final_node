
import { Router } from "express";

import asyncHandler from "../../utils/asyncHandler.js"
import * as controller from "./review.controller.js"
import authenticateJWT from "../../middlewares/authMiddleware.js"
import ROLES from "../../../dataBase/roles.js"
const reviewRouter = Router()

reviewRouter.post("/add", authenticateJWT([ROLES.USER]), asyncHandler(controller.createReview))
reviewRouter.get("/all/:productId", asyncHandler(controller.getAllReviewsForProduct))



export default reviewRouter;