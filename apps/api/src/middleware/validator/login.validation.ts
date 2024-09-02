import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const loginValidation = [
  body('username').notEmpty().withMessage('Please fill out your username'),
  body('password')
    .notEmpty()
    .withMessage('Please provide your password')
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minSymbols: 1,
      minNumbers: 1,
    })
    .withMessage(
      'Password must contain minimum 8 characters, at least one uppercase, one lowercase, one number, one symbol',
    )
    .trim(),
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
