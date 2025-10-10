import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
        products: [
            {
                productId: {
                    type: mongoose.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                qnt: {
                    type: Number,
                    default: 1
                }
            }

        ]
    },

    {
        timestamps: true
    }
)
export const CartModel = mongoose.model("Cart", cartSchema)