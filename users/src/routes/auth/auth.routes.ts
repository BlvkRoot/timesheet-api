import { Request, Response, Router } from 'express';
import createUserFactory from '../../factory/auth/register/createUserFactory';
import loginFactory from '../../factory/auth/login/loginFactory';

const authRoutes = Router();

authRoutes.post(
  '/create',
  async (request: Request, response: Response) =>
    await createUserFactory().handle(request, response)
);
authRoutes.post(
  '/login',
  async (request: Request, response: Response) =>
    await loginFactory().handle(request, response)
);

export default authRoutes;
