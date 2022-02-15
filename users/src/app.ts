import express, { Request, Response } from 'express';
import authRoutes from './routes/auth/auth.routes';
import '../database';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (request: Request, response: Response) => {
    response.json({
        message: 'Response from Users',
    });
});

app.use('/api/v1', authRoutes);

export default app;