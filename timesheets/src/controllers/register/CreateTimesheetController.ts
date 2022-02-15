import { Request, Response } from 'express';
import ICreateTimesheetService from '../../services/register/ICreateTimesheetService';
import ICreateTimesheetController from './ICreateTimesheetController';

class CreateTimesheetController implements ICreateTimesheetController {
  constructor(private timesheetService: ICreateTimesheetService) {}
  handle = async (request: Request, response: Response): Promise<Response> => {
    try {
      const {
        user_id,
        project_type,
        project_title,
        project_description,
        project_hours,
      } = request.body;

      const timesheet = await this.timesheetService.execute({
        user_id,
        project_type,
        project_title,
        project_description,
        project_hours,
      });

      return response.json({
        message: 'Timesheet successfully created',
        success: true,
        data: timesheet,
      });
    } catch (error) {
      return response.json({
        message: 'Error creating timesheet',
        success: false,
        data: [],
      });
    }
  };
}

export default CreateTimesheetController;
