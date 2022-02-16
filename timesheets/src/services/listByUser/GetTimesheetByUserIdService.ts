import IGetTimesheetByUserIdRepository from '../../repository/listByUser/IGetTimesheetByUserIdRepository';
import IListTimesheetByUserIdService from './IGetTimesheetByUserIdService';
import TimesheetsDTO from '../../dto/TimesheetsDTO';

interface ITimesheetParam {
  user_id: string;
}

class GetTimesheetByUserIdService implements IListTimesheetByUserIdService {
  constructor(private timesheetRepository: IGetTimesheetByUserIdRepository) {}
  execute = async ({ user_id }: ITimesheetParam): Promise<TimesheetsDTO[]> => {
    try {
      const timesheets = await this.timesheetRepository.getTimesheetByUserId(
        user_id
      );

      if(!timesheets) throw new Error('No timesheets to display');

      return timesheets;
    } catch ({ message }) {
      throw new Error(message);
    }
  };
}

export default GetTimesheetByUserIdService;
