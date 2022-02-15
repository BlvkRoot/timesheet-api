import { Request, Response, Router } from 'express';
import createUserFactory from '../../factory/auth/register/createUserFactory';

const authRoutes = Router();

authRoutes.post('/users/create', async (request: Request, response: Response) => await createUserFactory().handle(request, response));

export default authRoutes;
