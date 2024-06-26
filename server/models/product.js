const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgName: {
    type: [String],
    required: true,
    validate: [arrayLimit, "{PATH} at least one image is required"],
  },
  description: {
    type: String,
    required: true,
  },
  compatible: {
    type: String,
  },
  brand: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  weight: {
    type: String,
  },
  color: {
    type: String,
  },
});

function arrayLimit(img) {
  return img.length > 0;
}

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
