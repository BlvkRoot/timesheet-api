import CreateUserController from "../../controllers/auth/CreateUserController";
import CreateUserRepository from "../../repository/auth/CreateUserRepository";
import CreateUserService from "../../services/auth/CreateUserService";

const createUserFactory = () => {
    const userRepository = new CreateUserRepository();
    const userService = new CreateUserService(userRepository);
    const userController = new CreateUserController(userService);
    return userController;
};

export default createUserFactory;
