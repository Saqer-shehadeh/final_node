import {Router} from "express"
import asyncHandler from "../../utils/asyncHandler.js"
import * as controller from "./subcategory.controller.js"
import { validate } from "../../middlewares/validationMiddleware.js"
import *as  schemas from "../../validation/subCategory.validator.js"


const subCategoriesRouter=Router()

subCategoriesRouter.post("/add",validate(schemas.create),asyncHandler(controller.createSubCategory))
subCategoriesRouter.get("/all",asyncHandler(controller.getAllSubCategories))
subCategoriesRouter.post("/:id",asyncHandler(controller.getSubCategoryById))
subCategoriesRouter.put("/:id",validate(schemas.update)/*,authenticateJWT(ROLES.ADMIN)*/,asyncHandler(controller.updateSubCategory))
subCategoriesRouter.delete("/:id"/*,authenticateJWT(ROLES.ADMIN)*/,controller.deleteSubCategory)
subCategoriesRouter.get("/:id",asyncHandler(controller.getSubCategoriesByCategoryId))

export default subCategoriesRouter

