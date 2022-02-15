import ILoginRepository from '../../../repository/auth/login/ILoginRepository';
import ILoginService from './ILoginService';
import authJson from '../../../config/auth.json';
import UserDTO from '../../../dto/UserDTO';
import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcryptjs';

interface ILoginRequest {
  email: string;
  password: string;
}
class LoginService implements ILoginService {
  constructor(private loginRepository: ILoginRepository) {}

  execute = async ({ email, password }: ILoginRequest): Promise<UserDTO> => {
    try {
      const userExists = await this.loginRepository.findUserByEmail(email);
      if (!userExists) throw new Error(`Invalid User`);

      const { password: passwordHash, phone, name } = userExists;
      const passwordMatch = compareSync(password, passwordHash);

      if (!passwordMatch) throw new Error(`User email or password Invalid.`);

      userExists.token = sign({ name, email, phone }, authJson.secret, {
        expiresIn: '1d',
      });

      return userExists;
    } catch ({ message }) {
      throw new Error(`${message}`);
    }
  };
}

export default LoginService;
