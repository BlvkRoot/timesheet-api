import CreateUserController from "../../../controllers/auth/register/CreateUserController";
import CreateUserRepository from "../../../repository/auth/register/CreateUserRepository";
import CreateUserService from "../../../services/auth/register/CreateUserService";

const createUserFactory = () => {
    const userRepository = new CreateUserRepository();
    const userService = new CreateUserService(userRepository);
    const userController = new CreateUserController(userService);
    return userController;
};

export default createUserFactory;
