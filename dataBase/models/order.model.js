import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
        products: [
            {
                productId: {
                    _id:{
                        type:mongoose.Types.ObjectId,
                        ref:"Product",
                        required:true,
                    },
                    name:{
                        type:String,
                        required:true,
                    }
                    ,
                    mainImage:{
                        type:Object,
                        required:true,
                    },
                },
                qnt: {
                    type: Number,
                    default: 1
                },
                price: {
                    type: Number,
                    required: true,
                },
                finalPrice: {
                    type: Number,
                    required: true,
                }

            }]
        ,
        totalPrice: {
            type: Number,
            required: true
        },
        address:{
            type:String,
            required:true

        },
        phone:{
            type:Number,
            required:true,
        },
        coupon:{
            type:mongoose.Types.ObjectId,
            ref:"Coupon"
        },
        paymentType:{
            type:String,
            enum:["cash","card"],
            required:true,
            default:"cash"
        },
        status:{
            type:String,
            enum:["pending","onway","confirmed","delivered","cancalled"],
            default:"pending",
            required:true
        }
    },

    {
        timestamps: true
    }
)
export const OrderModel = mongoose.model("Order", orderSchema)