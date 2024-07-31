import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Access is denied');
};

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send('form');
  }

  @post('/login')
  @validateBody('email', 'password')
  @use(requireAuth)
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email && password && email === '111' && password === '111') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('invalid email or password');
    }
  }
}

export { router };
