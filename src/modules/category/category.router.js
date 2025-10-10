import {Router} from "express"
import * as controller from './category.controller.js'
import asyncHandler from "../../utils/asyncHandler.js"
import ROLES from "../../../dataBase/roles.js"
import authenticateJWT from "../../middlewares/authMiddleware.js"
import upload from "../../middlewares/multer.middleware.js"

const categoryRouter=Router()

categoryRouter.post("/add"/*,authenticateJWT(ROLES.ADMIN)*/,upload.single("image"),asyncHandler(controller.createCategory))
categoryRouter.get("/getAllCategories",asyncHandler(controller.getAllCategories))
categoryRouter.post("/:id",asyncHandler(controller.getCategoryById))
categoryRouter.put("/:id"/*,authenticateJWT(ROLES.ADMIN)*/,upload.single("image"),asyncHandler(controller.updateCategory))
categoryRouter.delete("/:id"/*,authenticateJWT(ROLES.ADMIN)*/,controller.deleteCategory)
export default categoryRouter