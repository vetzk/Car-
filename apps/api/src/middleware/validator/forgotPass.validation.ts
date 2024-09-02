import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const forgotPassValidation = [
  body('email')
    .notEmpty()
    .withMessage('Please input your email')
    .isEmail()
    .withMessage('Wrong format email'),
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
