import { Request, Response } from 'express';
import ILoginService from '../../../services/auth/login/ILoginService';
import ILoginController from './ILoginController';

class LoginController implements ILoginController {
  constructor(private loginService: ILoginService) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { email, password } = request.body;
      const user = await this.loginService.execute({
        email,
        password
      });
      return response.json({
        message: 'Login successful',
        success: true,
        token: user.token,
      });
    } catch ({ message }) {
      response.json({ message, success: false, data: [] });
    }
  };
}

export default LoginController;
