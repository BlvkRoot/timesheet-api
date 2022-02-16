import { getRepository, Repository } from 'typeorm';
import TimesheetsDTO from '../../dto/TimesheetsDTO';
import Timesheet from '../../entities/Timesheet';
import ICreateTimesheetRepository from './ICreateTimesheetRepository';

class CreateTimesheetRepository implements ICreateTimesheetRepository {
  private repository: Repository<Timesheet>;
  constructor() {
    this.repository = getRepository(Timesheet);
  }
  async create({
    user_id,
    project_type,
    project_title,
    project_description,
    project_hours,
  }: TimesheetsDTO): Promise<TimesheetsDTO> {
    try {
      const timesheet = this.repository.create({
        user_id,
        project_type,
        project_title,
        project_description,
        project_hours,
      });

      return await this.repository.save(timesheet);
    } catch ({ message }) {
      throw new Error(message);
    }
  }
}

export default CreateTimesheetRepository;
