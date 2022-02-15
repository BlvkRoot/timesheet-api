import UserDTO from "../../../dto/UserDTO";

interface ILoginService {
    execute({email, password}): Promise<UserDTO>;
}

export default ILoginService;