import { otpValidation } from '@/middleware/validator/otp.validation';
import { AuthController } from '../controllers/auth.controller';
import { registerValidation } from '../middleware/validator/register.validation';
import { NextFunction, Request, Response, Router } from 'express';
import { loginValidation } from '@/middleware/validator/login.validation';
import { verifyToken } from '@/middleware/verifyToken';
import { forgotPassValidation } from '@/middleware/validator/forgotPass.validation';
import { resetPassValidation } from '@/middleware/validator/resetPass.validation';
import passport from 'passport';

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/register',
      registerValidation,
      this.authController.register,
    );

    this.router.post(
      '/verify-otp',
      otpValidation,
      this.authController.verifyOtp,
    );

    this.router.get('/data-otp', this.authController.getIdCodeForOtp);
    this.router.post('/login', loginValidation, this.authController.login);
    this.router.get('/keep-login', verifyToken, this.authController.keepLogin);
    this.router.post(
      '/forgot-password',
      forgotPassValidation,
      verifyToken,
      this.authController.forgotPassword,
    );
    this.router.patch(
      '/reset-password',
      resetPassValidation,
      verifyToken,
      this.authController.resetPassword,
    );
    this.router.get(
      '/auth/google',
      passport.authenticate('google', { scope: ['profile', 'email'] }),
    );
    this.router.get(
      '/auth/google/callback',
      passport.authenticate('google', { failureRedirect: '/login' }),
      (req: Request, res: Response, next: NextFunction) => {
        res.redirect('/');
      },
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
