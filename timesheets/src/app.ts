import express, { Request, Response } from 'express';
import timesheetRoutes from './routes/register/timesheet.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/', async (request: Request, response: Response) => {
    return response.json({
        message: 'Hello from timesheets',
    })
});

app.use('/api/v1/timesheets', timesheetRoutes);

export default app;