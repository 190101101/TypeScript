import { Request, Response } from 'express';
import { get } from '../decorators/routes';
import { controller } from '../decorators/controller';

@controller('/auth')
class LoginController {
  @get('/login')
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
}
