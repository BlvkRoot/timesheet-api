import UserDTO from '../../../dto/UserDTO';
import ICreateUserRepository from '../../repository/auth/ICreateUserRepository';
import ICreateUserService from './ICreateUserService';
import { sign } from 'jsonwebtoken';
import authJson from '../../config/auth.json';

class CreateUserService implements ICreateUserService {
  constructor(private userRepository: ICreateUserRepository) {}

  execute = async ({ name, email, password, phone }: UserDTO): Promise<UserDTO> => {
    try {
        const user = await this.userRepository.create({
            name,
            email,
            password,
            phone,
          });
        const token = sign({name, email, phone}, authJson.secret, { expiresIn: '1d'});
        user.token = token;
        return user;
    } catch (error) {
        throw new Error(`${error}`);
    }
  };
}

export default CreateUserService;
