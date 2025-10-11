import mongoose from "mongoose";

const productInCartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    qnt: {
        type: Number,
        default: 1
    },
      attributes:[{
            name:{type:String,required:true},
            value:
                {
                    type:mongoose.Schema.Types.Mixed,
                    required:true
                }
            ,
            _id:false
        }
        ],
},{
    _id: true
})



const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
        products: [productInCartSchema]
    },

    {
        timestamps: true
    }
)
export const CartModel = mongoose.model("Cart", cartSchema)