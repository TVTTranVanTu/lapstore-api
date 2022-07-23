import { number } from "joi";
import mongoose, { Schema } from "mongoose";

export type reservation = {
  productId: string;
  userId: string;
  quantity: number;
};

export interface IIventory extends Document {
  productId: string;
  quantity: number;
  reservations: reservation[];
  createdAt: Date;
  updatedAt: Date;
}

const iventorySchema = new Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: Number,
    reservations: Array,
    create_at: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

export default mongoose.model<IIventory>("Iventory", iventorySchema);
