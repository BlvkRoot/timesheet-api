import { Request, Response } from "express";
import UserDTO from "../../dto/UserDTO";

interface ICreateUserController {
    handle(request: Request, response: Response): Promise<UserDTO>;
}

export default ICreateUserController;