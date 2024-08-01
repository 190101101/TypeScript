import express from 'express';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['token'] }));
app.use(AppRouter.getInstance());

app.listen(process.env.PORT || 3000, () => {
  console.log(`http://localhost:3000`);
});
