import express, { Request, Response } from 'express';
import authRoutes from './routes/auth/auth.routes';
import './database';
import cors from 'cors';

const app = express();
const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true
}

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors(corsOptions));

app.get('/', async (request: Request, response: Response) => {
    return response.json({
        message: 'Response from Users',
    });
});

app.use('/api/v1/users', authRoutes);

export default app;