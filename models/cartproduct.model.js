import mongoose from "mongoose";
const cartProductSchema = new mongoose.Shcema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'product'

    },
    quantity: {
        type: Number,
        default: 1

    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    timestpamps: true
})
const CarProductModel = mongoose.model('cartProduct', cartProductSchema)
export default CarProductModel