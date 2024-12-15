import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';

const app = express();

app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`http://localhost:3000`);
});
