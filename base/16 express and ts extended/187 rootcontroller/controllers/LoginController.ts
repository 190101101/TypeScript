import { NextFunction, Request, Response } from 'express';
import { get, controller, use, bodyValidator, post } from '../decorators';

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('request was made!');
  next();
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response) {
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
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === '111' && password === '111') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      req.session = undefined;
    }
    res.redirect('/');
  }
}
