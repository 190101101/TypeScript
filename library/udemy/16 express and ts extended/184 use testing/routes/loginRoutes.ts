import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Access is denied');
};

const router = Router();

router.get('/login', (req: Request, res: Response) => {
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

  if (email && password && email === '111' && password === '111') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`<div>
      <p>you are logged in</p>
      <a href="/logout">log out</a>
    </div>
    `);
  } else {
    res.send(`<div>
      <p>you are not logged in</p>
      <a href="/login">login</a>
    </div>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    req.session = undefined;
  }
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('welcome to protected route, logged in user');
});

export { router };
