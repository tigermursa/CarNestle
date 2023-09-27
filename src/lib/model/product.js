import mongoose from "mongoose";

const productModel = new mongoose.Schema({
  type: String,
  name: String,
  location: String,
  price: Number,
  stars: Number,
  image: String,
  info: [
    {
      icon: String,
      text: String,
    },
  ],
});

export const Product = mongoose.models.carscollectionones|| mongoose.model("carscollectionones", productModel);
