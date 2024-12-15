import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`http://localhost:3000`);
});
