const mongoose = require("mongoose");
const { Schema } = mongoose;

//Schema
const productsSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: String,
  price: {
    type: Number,
    min: [1, "Wrong min price"],
  },
  discountPercentage: {
    type: Number,
    min: [0, "Wrong min discount"],
    max: [50, "Wrong max discount"],
    required: true,
  },
  rating: {
    type: Number,
    min: [0, "Wrong min rating"],
    max: [5, "Wrong max rating"],
  },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

//Model
exports.Product = mongoose.model("Product", productsSchema);
