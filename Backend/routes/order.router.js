import express from "express";

import { addOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post('/new', addOrder);

export default router;