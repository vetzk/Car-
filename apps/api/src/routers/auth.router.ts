import { otpValidation } from '@/middleware/validator/otp.validation';
import { AuthController } from '../controllers/auth.controller';
import { registerValidation } from '../middleware/validator/register.validation';
import { Router } from 'express';
import { loginValidation } from '@/middleware/validator/login.validation';
import { verifyToken } from '@/middleware/verifyToken';

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
  }

  getRouter(): Router {
    return this.router;
  }
}
