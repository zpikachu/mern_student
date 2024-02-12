const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: { type: String },
    brand: { type: String },
    model: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    total: { type: Number },
});

module.exports = mongoose.model("Product", ProductSchema);