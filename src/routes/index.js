import globalErrorHandler from "../middlewares/globalErrorHandler.js"
import authrouter from "../modules/auth/auth.router.js"
import categoryRouter from "../modules/category/category.router.js"
import productRouter from "../modules/product/product.router.js"
import subCategoriesRouter from "../modules/subcategory/subcategory.router.js"
import cartRouter from "../modules/cart/cart.router.js"
import favoriteRouter from "../modules/favorite/favorite.router.js"
import orderRouter from "../modules/order/order.router.js"
import couponRouter from "../modules/coupon/coupon.router.js"
import reviewRouter from "../modules/review/review.router.js"
const init=(express,app)=>{
    app.use(express.json())
    app.use("/api/category",categoryRouter)
    app.use("/uploads",express.static("uploads"))
    app.use("/api/auth",authrouter)
    app.use("/api/subcategories",subCategoriesRouter)
    app.use("/api/product",productRouter)
    app.use("/api/cart",cartRouter)
    app.use("/api/favorite",favoriteRouter)
    app.use("/api/order",orderRouter)
    app.use("/api/coupon",couponRouter)
    app.use("/api/review",reviewRouter)
    app.use(globalErrorHandler)
}

export default init