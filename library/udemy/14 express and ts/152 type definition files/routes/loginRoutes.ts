import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send(`
  <form action="/login" method="POST">
    <div>
      <label>email</label>
      <input type="text" name="email" placeholder="email" />
    </div>
    <div>
      <label>password</label>
      <input type="text" name="password" placeholder="password" />
    </div>
    <div>
      <button type="submit">submit</button>
    </div>
  </form>
`);
});

router.post('/login', (req: Request, res: Response) => {
  const { email } = req.body;
  if (email) {
    res.send(email.toUpperCase());
  } else {
    res.send(req.body);
  }
});

export { router };
