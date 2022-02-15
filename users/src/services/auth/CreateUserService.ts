import UserDTO from '../../dto/UserDTO';
import ICreateUserRepository from '../../repository/auth/ICreateUserRepository';
import ICreateUserService from './ICreateUserService';
import { sign } from 'jsonwebtoken';
import authJson from '../../config/auth.json';
import { hashSync } from 'bcryptjs';

class CreateUserService implements ICreateUserService {
  constructor(private userRepository: ICreateUserRepository) {}

  execute = async ({
    name,
    email,
    password,
    phone,
  }: UserDTO): Promise<UserDTO> => {
    try {
      const verifyUserAlreadyExists =
        await this.userRepository.userAlreadyExists(email);
      if (verifyUserAlreadyExists)
        throw new Error(`User ${email} already exists`);

      const passwordHash = hashSync(password, 8);
      const user = await this.userRepository.create({
        name,
        email,
        password: passwordHash,
        phone,
      });
      user.token = sign({ name, email, phone }, authJson.secret, {
        expiresIn: '1d',
      });

      return user;
    } catch ({ message }) {
      throw new Error(`${message}`);
    }
  };
}

export default CreateUserService;
