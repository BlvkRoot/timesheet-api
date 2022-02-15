import { Request, Response, Router } from 'express';
import createUserFactory from '../../factory/auth/register/createUserFactory';
import loginFactory from '../../factory/auth/login/loginFactory';

const authRoutes = Router();

authRoutes.post(
  '/users/create',
  async (request: Request, response: Response) =>
    await createUserFactory().handle(request, response)
);
authRoutes.post(
  '/users/login',
  async (request: Request, response: Response) =>
    await loginFactory().handle(request, response)
);

export default authRoutes;
