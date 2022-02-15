import { Request, Response } from 'express';

interface ICreateTimesheetController {
  handle(request: Request, response: Response): Promise<Response>;
}

export default ICreateTimesheetController;
