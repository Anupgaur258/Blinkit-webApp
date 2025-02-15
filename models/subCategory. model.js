import mongoose from "mongoose";
const subCategory = new moongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    category: [{
        type: moongoose.Schema.ObjectId,
        ref: "category"
    }],
    timestamps: true
})
const SubCategoryModel = mongoose.model('subCategory', subCategory)
export default SubCategoryModel