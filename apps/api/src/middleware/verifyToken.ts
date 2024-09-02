import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
      throw {
        rc: 404,
        message: 'Token not exist',
      };
    }
    const checkToken = verify(
      token,
      process.env.TOKEN_KEY || 'vw3nEGNbxtR1T400LGjeoh9LLwLKvpilVjr',
    );
    res.locals.decrypt = checkToken;
    next();
  } catch (error) {
    console.error(error);
    return next({ success: false, message: 'Cannot verify your token', error });
  }
};
