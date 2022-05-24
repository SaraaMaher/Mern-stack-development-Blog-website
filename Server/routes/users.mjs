//routes/blogPosts.routes.js
import express from 'express';

import { getAllusers,adduser } from '../controllers/usercontroller.mjs';

const router = express.Router();

router.get('/', getAllusers);
router.post("/", adduser);

export default router;