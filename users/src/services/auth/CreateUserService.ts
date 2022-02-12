import UserDTO from '../../../dto/UserDTO';
import ICreateUserRepository from '../../repository/auth/ICreateUserRepository';
import ICreateUserService from './ICreateUserService';

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
        return user;
    } catch (error) {
        throw new Error(`${error}`);
    }
  };
}

export default CreateUserService;
