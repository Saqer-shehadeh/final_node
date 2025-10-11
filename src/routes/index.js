import globalErrorHandler from "../middlewares/globalErrorHandler.js"
import authrouter from "../modules/auth/auth.router.js"
import categoryRouter from "../modules/category/category.router.js"
import productRouter from "../modules/product/product.router.js"
import subCategoriesRouter from "../modules/subcategory/subcategory.router.js"
import cartRouter from "../modules/cart/cart.router.js"


const init=(express,app)=>{
    app.use(express.json())
    app.use("/api/category",categoryRouter)
    app.use("/uploads",express.static("uploads"))
    app.use("/api/auth",authrouter)
    app.use("/api/subcategories",subCategoriesRouter)
    app.use("/api/product",productRouter)
    app.use("/api/cart",cartRouter)
    app.use(globalErrorHandler)

}

export default init