import mongoose from "mongoose";

const productModel = new mongoose.Schema({
  title: String,
  brand: String,
});

export const Product = mongoose.models.phones || mongoose.model("phones", productModel);