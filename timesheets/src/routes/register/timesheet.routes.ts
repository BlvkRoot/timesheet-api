import { Router, Request, Response } from 'express';
import createTimesheetFactory from '../../factory/register/createTimesheetFactory';

const timesheetRoutes = Router();

timesheetRoutes.post('/create', async (request: Request, response: Response) =>
  await createTimesheetFactory().handle(request, response)
);

export default timesheetRoutes; 
