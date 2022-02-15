import express, { Request, Response } from 'express';
import authRoutes from './routes/auth/auth.routes';
import './database';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', async (request: Request, response: Response) => {
    return response.json({
        message: 'Response from Users',
    });
});

app.use('/api/v1/users', authRoutes);

export default app;