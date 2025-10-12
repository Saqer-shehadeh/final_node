import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
        products: [
           {
                type: mongoose.Types.ObjectId,
                ref: "Product",
            }
        ],
    },

    {
        timestamps: true
    }
)
export const FavoriteModel = mongoose.model("Favorite", favoriteSchema)