import { NextFunction, Request, Response } from 'express';
import { get, use, controller } from '../decorators';

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Access is denied');
};

@controller('')
class RootController {
  @get('/')
  getLogin(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`<div>
        <p>you are logged in</p>
        <a href="/auth/logout">log out</a>
      </div>
      `);
    } else {
      res.send(`<div>
        <p>you are not logged in</p>
        <a href="/auth/login">login</a>
      </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('welcome to protected route, logged in user');
  }
}
