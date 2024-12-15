import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

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

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (
    email &&
    password &&
    email === 'apsi@gmail.com' &&
    password === 'apsi2002'
  ) {
    req.session = { loggedIn: true };
    res.redirect('/?ok');
  } else {
    res.send('invalid email or password');
  }
});

export { router };
