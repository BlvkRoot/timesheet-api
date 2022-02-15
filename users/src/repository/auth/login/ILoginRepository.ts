import { Users } from "../../../entities/User";

interface ILoginRepository {
    findUserByEmail(email: string): Promise<Users>;
}

export default ILoginRepository;