import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";


dotenv.config();

import {connectDB} from "./db/connectDB.js";
const app = express();
const PORT = process.env.PORT || 5000;

import holdingsRouter from "./routes/holdings.router.js";
import positionRouter from "./routes/position.router.js";
import orderRouter from "./routes/order.router.js";

app.use(cors());
app.use(bodyParser.json());

app.use("/holdings", holdingsRouter);
app.use("/positions", positionRouter);
app.use('/orders', orderRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});