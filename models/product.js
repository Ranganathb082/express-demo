const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  // Add more fields as needed for your inventory management
  // For example, you might want to include fields like quantity, category, etc.
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
