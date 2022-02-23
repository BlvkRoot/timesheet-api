import { Request, Response, Router } from 'express';
import createUserFactory from '../../factory/auth/register/createUserFactory';
import loginFactory from '../../factory/auth/login/loginFactory';
import { isAuthenticated } from '../../middleware/AuthMiddleware';

const authRoutes = Router();

authRoutes.post(
  '/create',
  [isAuthenticated],
  async (request: Request, response: Response) =>
    await createUserFactory().handle(request, response)
);
authRoutes.post(
  '/login',
  async (request: Request, response: Response) =>
    await loginFactory().handle(request, response)
);

authRoutes.get(
  '/isAuthenticated',
  isAuthenticated,
  async (request: Request, response: Response) => {
    return response.json({
      success: true,
    });
  }
);

export default authRoutes;
