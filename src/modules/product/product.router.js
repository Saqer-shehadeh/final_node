import { Router } from "express";
import * as controller from "./product.controller.js"
import upload from "../../middlewares/multer.middleware.js";
import asyncHandler from "../../utils/asyncHandler.js";
import * as schemas from "../../validation/product.validator.js"
import { validate } from "../../middlewares/validationMiddleware.js";
const productRouter = Router()

productRouter.post("/add", upload.fields([
    {
        name: "mainImage",
        maxCount: 1
    },
    {
        name: "subImages",
        maxCount: 5
    }
]),
validate(schemas.create)
,
    asyncHandler(controller.createProduct)
)

productRouter.get("/getAll",asyncHandler(controller.getAll))
productRouter.get("/:id",asyncHandler(controller.getProductById))

export default productRouter