import mongoose from 'mongoose'
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "provide name"]
    },
    email: {
        type: String,
        required: [true, " provide email"],
        unique: true
    },
    avatar: {
        type: String,
        default: ""

    },
    mobile: {
        type: Number,
        default: null
    },
    refresh_token: {
        type: String,
        default: ""

    },
    verify_token: {
        type: Boolean,
        default: false

    },
    last_login_date: {
        type: Date,
        default: ""
    },
    status: {
        type: String,
        enum: ["active", "disactive", "suspended"],
        default: "active"
    },
    address_details: [{
        type: mongoose.Schema.ObjectId,
        ref: 'address'
    }],
    shopping_cart: [{
        type: mongoose.Schema.ObjectId,
        ref: 'cartProduct'
    }],
    orderHistory: [{
        type: mongoose.Schema.ObjectId,
        ref: 'order' // this is the collection name 
    }],
    forgot_password_otp: {
        type: String,
        default: null
    },
    forgot_password_expiry: {
        type: Date,
        default: ""
    },
    role: {
        type: String,
        enum: ["ADMIN", " USER"],
        default: "USER"
    },
    timestamps: true,
})
const UserModel = mongoose.model('User', userSchema)
export default UserModel