import { Request, Response } from 'express';
import ICreateUserService from '../../../services/auth/register/ICreateUserService';
import ICreateUserController from './ICreateUserController';

class CreateUserController implements ICreateUserController {
  constructor(private userService: ICreateUserService) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { name, email, password, phone } = request.body;
      const user = await this.userService.execute({
        name,
        email,
        password,
        phone,
      });
      delete user.password;

      return response.json({
        message: 'User Created Successfully',
        success: true,
        data: user,
      });
    } catch ({ message }) {
      response.json({ message, success: false, data: [] });
    }
  };
}

export default CreateUserController;
