import { Router, Request, Response } from 'express';
import getTimesheetByUserIdFactory from '../../factory/listByUser/getTimesheetFactory';
import createTimesheetFactory from '../../factory/register/createTimesheetFactory';

const timesheetRoutes = Router();

timesheetRoutes.post('/create', async (request: Request, response: Response) =>
  await createTimesheetFactory().handle(request, response)
);

timesheetRoutes.get('/show/:user_id', async (request: Request, response: Response) =>
  await getTimesheetByUserIdFactory().handle(request, response)
);

export default timesheetRoutes; 
