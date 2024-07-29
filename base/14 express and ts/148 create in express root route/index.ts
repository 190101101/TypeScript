import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>hello type script</h1>');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`http://localhost:3000`);
});
