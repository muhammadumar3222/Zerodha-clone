import mongoose from "mongoose";

const holdingsSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
}, { timestamps: true });

const Holding = mongoose.model("Holding", holdingsSchema);

export default Holding;