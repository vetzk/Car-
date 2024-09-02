import prisma from '@/prisma';
import { error } from 'console';
import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const registerValidation = [
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('format email is wrong')
    .custom(async (email) => {
      const findExistedEmail = await prisma.user.findUnique({
        where: { email },
      });

      if (findExistedEmail) {
        throw new Error('Email is already exist');
      }
      return true;
    })
    .normalizeEmail(), //make the email in lowercase
  body('password')
    .notEmpty()
    .withMessage('Password is required')
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
    .trim(), //remove whitespace
  body('confirmPassword')
    .notEmpty()
    .withMessage('Please confirm your password')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password does not match');
      }
      return true;
    }),
  body('role').notEmpty().withMessage('Please choose a role').escape(), //sanitize input to prevent injection attacks
  (req: Request, res: Response, next: NextFunction) => {
    const errorValidator = validationResult(req);
    if (!errorValidator.isEmpty()) {
      return res.status(400).send({
        success: false,
        error: errorValidator,
      });
    }
    next();
  },
];
