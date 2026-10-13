import express from 'express';

import {getAllHoldings} from '../controllers/holdings.controller.js';


const router = express.Router();

router.get('/all', getAllHoldings);

export default router;