import express from 'express';
import { healthCheck } from '../controllers';

const router = express.Router();

router.get('/health', healthCheck);

export default router;
