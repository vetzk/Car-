import { sign } from 'jsonwebtoken';

export const createToken = (data: any, expiresIn: string) => {
  return sign(
    data,
    process.env.TOKEN_KEY || 'vw3nEGNbxtR1T400LGjeoh9LLwLKvpilVjr',
    {
      expiresIn: expiresIn || '1h',
    },
  );
};
