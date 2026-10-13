import express from 'express';
import {getAllPosition} from '../controllers/position.controller.js';
const router = express.Router();

router.get('/all', getAllPosition);

export default router;