import express from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['token'] }));
app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`http://localhost:3000`);
});
