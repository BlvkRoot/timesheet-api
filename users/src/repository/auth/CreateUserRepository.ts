import UserDTO from '../../dto/UserDTO';
import ICreateUserRepository from './ICreateUserRepository';

class CreateUserRepository implements ICreateUserRepository {
  create = ({ name, email, password, phone }: UserDTO): Promise<UserDTO> => {
    
    try {
        return new Promise((resolve, reject) => resolve({ name, email, password, phone }));
    } catch (error) {
        throw new Error(`${error}`);
    }
  };
}

export default CreateUserRepository;
