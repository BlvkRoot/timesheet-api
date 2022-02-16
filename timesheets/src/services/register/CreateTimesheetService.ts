import ICreateTimesheetRepository from '../../repository/register/ICreateTimesheetRepository';
import ICreateTimesheetService from './ICreateTimesheetService';
import TimesheetsDTO from '../../dto/TimesheetsDTO';

interface ITimesheetRequest {
  user_id: string;
  project_type: string;
  project_title: string;
  project_description: string;
  project_hours: number;
}

class CreateTimesheetService implements ICreateTimesheetService {
  constructor(private timesheetRepository: ICreateTimesheetRepository) {}
  execute = async ({
    user_id,
    project_type,
    project_title,
    project_description,
    project_hours,
  }: ITimesheetRequest): Promise<TimesheetsDTO> => {
    try {
      const timesheet = await this.timesheetRepository.create({
        user_id,
        project_type,
        project_title,
        project_description,
        project_hours,
      });

      return timesheet;
    } catch ({ message }) {
      throw new Error(message);
    }
  };
}

export default CreateTimesheetService;
