import { Request, Response, Router } from 'express';
import createUserFactory from '../../factory/auth/createUserFactory';

const authRoutes = Router();

authRoutes.post('/users/create', async (request: Request, response: Response) => {
    try {
        const user = await createUserFactory().handle(request, response);

        user.password = null;
        return response.json({
            message: 'User Created Successfully',
            success: true,
            data: user
        })
    } catch(error) {
        response.json({ message: error, success: false, data: []});        
    }
});

export default authRoutes;
