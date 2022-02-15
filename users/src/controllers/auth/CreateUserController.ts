import { Request, Response } from 'express';
import UserDTO from '../../dto/UserDTO';
import ICreateUserService from '../../services/auth/ICreateUserService';
import ICreateUserController from './ICreateUserController';

class CreateUserController implements ICreateUserController {
  constructor(private userService: ICreateUserService) {}

  handle = async (request: Request, response: Response): Promise<UserDTO> => {
    try {
      const { name, email, password, phone } = request.body;
      const user = await this.userService.execute({
        name,
        email,
        password,
        phone,
      });

      delete user.password;

      return user;
    } catch (error) {
        throw new Error(`${error}`);
    }
  };
}

export default CreateUserController;
