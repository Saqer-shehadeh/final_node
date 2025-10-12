
import { Router } from "express";
import asyncHandler from "../../utils/asyncHandler.js"
import * as controller from "./favorite.controller.js"
import authenticateJWT from "../../middlewares/authMiddleware.js"
import ROLES from "../../../dataBase/roles.js"
const favoriteRouter = Router()
favoriteRouter.post("/add", authenticateJWT([ROLES.USER]), asyncHandler(controller.addToFavorite))
favoriteRouter.get("/myfavorites", authenticateJWT([ROLES.USER]), asyncHandler(controller.getMyFavorites))
favoriteRouter.delete("/remove/:id", authenticateJWT([ROLES.USER]), asyncHandler(controller.removeFromFavorite))
favoriteRouter.delete("/clear", authenticateJWT([ROLES.USER]), asyncHandler(controller.clearFavorites))



export default favoriteRouter;