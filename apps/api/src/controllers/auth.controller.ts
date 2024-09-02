import prisma from '../prisma';
import { sendEmail } from '../utils/emailResetPass';
import { hashPassword } from '../utils/hash';
import { createToken } from '../utils/jwt';
import { generateOtp } from '../utils/otp';
import { sendOTP } from '../utils/otpSend';
import { compareSync } from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { v4 as uuid } from 'uuid';

export class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        success: false,
        errors: errors.array(),
      });
    }
    try {
      const { email, password, confirmPassword, role, username } = req.body;

      const idCode = uuid();
      const otp = generateOtp();
      const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);
      const user = await prisma.user.create({
        data: {
          email,
          password: await hashPassword(password),
          identificationCode: idCode,
          username,
          role,
          otp,
          otpExpiresAt,
        },
      });

      await sendOTP(email, 'Verify your otp', null, { email, otp });
      const token = createToken(
        {
          id: user.id,
          identicationCode: user.identificationCode,
          email: user.email,
          role: user.role,
        },
        '24h',
      );
      return res.status(201).send({
        success: true,
        message: 'Success to create your account',
        token,
      });
    } catch (error) {
      console.error(error);
      next({
        success: false,
        message: 'Failed to register',
      });
    }
  }

  async verifyOtp(req: Request, res: Response, next: NextFunction) {
    const { identificationCode, otp } = req.body;
    try {
      const user = await prisma.user.findUnique({
        where: {
          identificationCode,
        },
      });

      if (!user || !user.otpExpiresAt) {
        return res.status(404).send({
          succes: false,
          message: 'User not found',
        });
      }

      if (user.otp !== otp || user.otpExpiresAt < new Date()) {
        if (user.otpExpiresAt < new Date()) {
          await prisma.user.update({
            data: {
              otp: null,
              otpExpiresAt: null,
            },
            where: {
              identificationCode,
            },
          });
          return res.status(200).send({
            success: true,
            message: 'Reset OTP',
          });
        }
        return res.status(400).send({
          success: false,
          message: 'Invalid or expired OTP',
        });
      }

      await prisma.user.update({
        where: {
          identificationCode,
        },
        data: {
          twoFactorAuth: true,
          otp: null,
          otpExpiresAt: null,
        },
      });

      return res.status(200).send({
        success: true,
        message: 'Two factor auth is enabled',
      });
    } catch (error) {
      console.error(error);
      return next({
        success: false,
        error,
      });
    }
  }

  async getIdCodeForOtp(req: Request, res: Response, next: NextFunction) {
    try {
      const { identificationCode } = req.body;

      const user = await prisma.user.findUnique({
        where: identificationCode,
      });

      if (!user) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find user',
        });
      }

      return res.status(200).send({
        success: true,
        message: 'success to get your data',
        result: { identificationCode: user?.identificationCode },
      });
    } catch (error) {
      console.error(error);
      return next({
        success: false,
        message: 'Cannot get your data for verifying otp',
      });
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    try {
      const findAcc = await prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (!findAcc) {
        return res.status(404).send({
          success: false,
          message: 'Wrong username',
        });
      } else {
        const comparePassword = compareSync(password, findAcc.password);

        if (!comparePassword) {
          return res.status(401).send({
            success: false,
            message: 'Wrong password',
          });
        }

        const token = createToken(
          {
            identificationCode: findAcc.identificationCode,
            role: findAcc.role,
            email: findAcc.email,
          },
          '24h',
        );

        const findProfile = await prisma.userprofile.findFirst({
          where: {
            userId: findAcc.id,
          },
        });

        return res.status(200).send({
          success: true,
          result: {
            role: findAcc.role,
            identificationCode: findAcc.identificationCode,
            image: findProfile?.imageProfile || null,
            token: token,
          },
        });
      }
    } catch (error) {
      console.error(error);
      return next({
        success: false,
        message: 'Failed to login',
      });
    }
  }

  async keepLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const findUser = await prisma.user.findUnique({
        where: {
          identificationCode: res.locals.decrypt.identificationCode,
        },
      });

      if (!findUser) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find user',
        });
      }

      const token = createToken(
        {
          identificationCode: findUser.identificationCode,
          role: findUser.role,
          email: findUser.email,
        },
        '24h',
      );

      return res.status(200).send({
        success: true,
        message: 'success to fetch user',
        result: {
          identificationCode: findUser.identificationCode,
          role: findUser.role,
          token: token,
        },
      });
    } catch (error) {
      console.error(error);
      return next({
        success: false,
        message: 'Cannot maintain login state',
      });
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;
    try {
      const findUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!findUser) {
        return res.status(404).send({
          success: false,
          message: 'Cannot find user',
        });
      }

      const token = createToken(
        {
          identificationCode: findUser.identificationCode,
          email: findUser.email,
        },
        '20m',
      );
      await sendEmail(findUser.email, 'Password Reset', null, {
        email: findUser.email,
        token,
      });

      return res.status(200).send({
        success: true,
        message: 'Account exist. Please reset your password',
        result: {
          token,
        },
      });
    } catch (error) {
      console.log(error);
      return next({
        success: false,
        message: 'Failed to send email',
      });
    }
  }
}
