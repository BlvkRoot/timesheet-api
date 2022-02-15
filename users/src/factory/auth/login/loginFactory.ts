import LoginController from "../../../controllers/auth/login/LoginController";
import LoginRepository from "../../../repository/auth/login/LoginRepository";
import LoginService from "../../../services/auth/login/LoginService";

const loginFactory = () => {
    const loginRepository = new LoginRepository();
    const loginService = new LoginService(loginRepository);
    const loginController = new LoginController(loginService);
    return loginController;
};

export default loginFactory;
