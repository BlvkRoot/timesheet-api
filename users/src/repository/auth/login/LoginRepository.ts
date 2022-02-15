import { getRepository, Repository } from 'typeorm';
import { Users } from '../../../entities/User';
import ILoginRepository from './ILoginRepository';

class LoginRepository implements ILoginRepository {
  private repository: Repository<Users>;
  constructor() {
    this.repository = getRepository(Users);
  }

  findUserByEmail = async (email: string): Promise<Users> => { 
    try {
        return await this.repository.findOne({ email });
    } catch ({message}) {
        throw new Error(message);
    }
  };
}

export default LoginRepository;
