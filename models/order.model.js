import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    orderId: {
        type: String,
        required: [true, ' provide orderId']
    },
    product_details: {
        id: String,
        type: String,
        image: Array,
    },
    productId: {
        type: moongoose.Schema.ObjectId,
        ref: "product"
    },
    paymentId: {
        type: String,
        default: "",
    },
    payment_status: {
        type: String,
        default: ""
    },
    delivery_address: {

        type: mongoose.Schema
            .ObjectId,
        ref: 'address',


    },
    totalAmt: {
        type: Number,
        default: 0
    },
    invoice_receipt: {
        type: String,
        default: ""
    },
    timestamps: true

})
const OrderModel = mongoose.model('order', orderSchema)
export default OrderModel