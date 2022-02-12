import express, { Request, Response } from 'express';

const app = express();

app.get('/', (request: Request, response: Response) => {
    response.json({
        message: 'Hello from timesheets',
    })
});

export default app;