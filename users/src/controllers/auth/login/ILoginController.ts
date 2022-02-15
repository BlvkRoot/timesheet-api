import { Request, Response } from "express";

interface ILoginController {
    handle(request: Request, response: Response): Promise<Response>;
}

export default ILoginController;