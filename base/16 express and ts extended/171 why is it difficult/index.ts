import express from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

/*
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['token'] }));
app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`http://localhost:3000`);
});
*/

class Server {
  app: express.Express = express();

  constructor() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieSession({ keys: ['token'] }));
    this.app.use(router);
  }

  listen(): void {
    this.app.listen(process.env.PORT || 3000, () => {
      console.log(`http://localhost:3000`);
    });
  }
}

new Server().listen();
