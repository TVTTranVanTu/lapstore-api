import mongoose, { Document, Schema } from "mongoose";
import { ICategory } from "./category.model";
export interface ISubCategory extends Document {
  subCategoryName: string;
  category: ICategory;
  createdAt: Date;
  updatedAt: Date;
}

const SubCategorySchema: Schema = new Schema(
  {
    subCategoryName: { type: String, required: true, unique: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ISubCategory>("SubCategory", SubCategorySchema);
