import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const otpValidation = [
  body('otp')
    .notEmpty()
    .withMessage('OTP is required')
    .isLength({ min: 6, max: 6 })
    .withMessage('OTP must be a 6-digit number'),
  (req: Request, res: Response, next: NextFunction) => {
    const errorValidation = validationResult(req);
    if (!errorValidation.isEmpty()) {
      return res.status(400).send({
        success: false,
        error: errorValidation,
      });
    }
    next();
  },
];
