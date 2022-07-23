import mongoose, { Document, Schema } from "mongoose";

export interface IBrand extends Document {
  brandName: string;
  brandThumnail: string;
  createdAt: Date;
  updatedAt: Date;
}

const BrandSchema: Schema = new Schema(
  {
    brandName: { type: String, required: true, unique: true },
    brandThumbnail: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IBrand>("Brand", BrandSchema);
