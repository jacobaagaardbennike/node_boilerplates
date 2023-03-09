import express from 'express';
import something from './something';

const router = express.Router();

router.use('/something', something);

export default router;
