import { Request, Response } from 'express';

interface IGetTimesheetByUserIdController {
  handle(request: Request, response: Response): Promise<Response>;
}

export default IGetTimesheetByUserIdController;
