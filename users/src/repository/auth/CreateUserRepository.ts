import { getRepository, Repository } from 'typeorm';
import UserDTO from '../../dto/UserDTO';
import { Users } from '../../entities/User';
import ICreateUserRepository from './ICreateUserRepository';

class CreateUserRepository implements ICreateUserRepository {
  private repository: Repository<Users>;
  constructor() {
    this.repository = getRepository(Users);
  }

  create = async ({ name, email, password, phone }: UserDTO): Promise<Users> => {
    
    try {
        const user = this.repository.create({ name, email, password, phone });

        return await this.repository.save(user);

    } catch ({message}) {
        throw new Error(message);
    }
  };
}

export default CreateUserRepository;
