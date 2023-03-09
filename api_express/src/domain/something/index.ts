import express from 'express';
import { SuccessResponse } from '../../core/apiResponse';
import asyncHandler from '../../core/asyncHandler';
import { NotFoundError } from '../../core/ApiError';

const router = express.Router();

router.get(
  '/url',
  asyncHandler(async (req, res) => {
    const something = '';

    if (!something) throw new NotFoundError('Blog not found');
    return new SuccessResponse('success', something).send(res);
  }),
);

export default router;
