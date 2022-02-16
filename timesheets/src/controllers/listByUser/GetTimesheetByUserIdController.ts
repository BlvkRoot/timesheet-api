import { Request, Response } from 'express';
import IGetTimesheetByUserIdService from '../../services/listByUser/IGetTimesheetByUserIdService';
import IGetTimesheetByUserIdController from './IGetTimesheetByUserIdController';

class GetTimesheetByUserIdController implements IGetTimesheetByUserIdController {
  constructor(private timesheetService: IGetTimesheetByUserIdService) {}
  handle = async (request: Request, response: Response): Promise<Response> => {
    try {
      const {
        user_id} = request.params;

      const timesheets = await this.timesheetService.execute({user_id});

      return response.json({
        message: 'Timesheet(s) listed successfully',
        success: true,
        data: timesheets,
      });
    } catch (error) {
      return response.json({
        message: 'Error listing timesheet(s)',
        success: false,
        data: [],
      });
    }
  };
}

export default GetTimesheetByUserIdController;
