const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    p_imageUrl: String,
    category: String,
    stock: Number,
})

module.exports = Product = mongoose.model("product", productSchema);