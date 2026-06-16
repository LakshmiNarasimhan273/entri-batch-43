const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isStock: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        enum: ["electronics", "home-care", "health-care", "computer", "accessories"],
    }
});

const Products = mongoose.model("products", productSchema);
module.exports = Products;  