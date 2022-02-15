import UserDTO from "../../../dto/UserDTO";
import { Users } from "../../../entities/User";

interface ICreateUserRepository {
    create(user: UserDTO): Promise<Users>;
    userAlreadyExists(email: string): Promise<Users>;
}

export default ICreateUserRepository;