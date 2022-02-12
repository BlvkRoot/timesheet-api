import UserDTO from "../../../dto/UserDTO";

interface ICreateUserService {
    execute(user: UserDTO): Promise<UserDTO>;
}

export default ICreateUserService;