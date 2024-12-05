import express from 'express';
import { contactController } from '../controller/contact.js';
const router = express.Router();

router.post('/contact',contactController)

export default router