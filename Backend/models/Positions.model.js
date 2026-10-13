import mongoose from "mongoose";

const positionsSchema = new mongoose.Schema(
  {
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
  },
  { timestamps: true },
);

const Position = mongoose.model("Position", positionsSchema);

export default Position;
