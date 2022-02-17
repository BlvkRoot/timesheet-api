import express, { Request, Response } from 'express';
import timesheetRoutes from './routes/register/timesheet.routes';
import cors from 'cors';
import './database';

const app = express();
const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true
}

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(cors(corsOptions));

app.get('/', async (request: Request, response: Response) => {
    return response.json({
        message: 'Hello from timesheets',
    })
});

app.use('/api/v1/timesheets', timesheetRoutes);

export default app;