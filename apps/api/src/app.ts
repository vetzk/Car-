import express, {
  Request,
  Response,
  Express,
  json,
  NextFunction,
  urlencoded,
} from 'express';
import cors from 'cors';
import { PORT } from './config';
import path from 'path';
import { AuthRouter } from './routers/auth.router';
export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use('/assets', express.static(path.join(__dirname, '../public')));
  }

  private handleError(): void {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).send('Not Found!');
      } else {
        next();
      }
    });

    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          console.error('Error', err.stack);
          console.log(err);
          res.status(500).send('Error!');
        } else {
          next();
        }
      },
    );
  }

  private routes(): void {
    const authRouter = new AuthRouter();

    this.app.use('/api/auth', authRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(` ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
