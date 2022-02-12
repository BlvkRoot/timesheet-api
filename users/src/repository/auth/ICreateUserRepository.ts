import UserDTO from "../../../dto/UserDTO";

interface ICreateUserRepository {
    create(user: UserDTO): Promise<UserDTO>;
}

export default ICreateUserRepository;