import mongoose, { Document, Schema } from "mongoose";
import { IBrand } from "./brand.model";
import { ISubCategory } from "./subcategory.model";

export interface IProduct extends Document {
  productName: string;
  productThumbnail: string;
  description: string;
  price: number;
  rating: number;
  discount: number;
  status: number;
  quantity: number;
  subCategory: ISubCategory;
  brand: IBrand;
}

const ProductSchema: Schema = new Schema(
  {
    productName: { type: String, required: true, unique: true },
    productThumbnail: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number },
    discount: { type: Number, required: true },
    status: { type: Number },
    quantity: { type: Number, required: true },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", ProductSchema);
