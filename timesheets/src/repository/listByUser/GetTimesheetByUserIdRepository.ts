import { getRepository, Repository } from "typeorm";
import TimesheetsDTO from "../../dto/TimesheetsDTO";
import Timesheets from "../../entities/Timesheet";
import IGetTimesheetByUserId from "./IGetTimesheetByUserIdRepository";

class GetTimesheetByUserId implements IGetTimesheetByUserId {
    private repository: Repository<Timesheets>;
    constructor() {
        this.repository = getRepository(Timesheets);
    }
    async getTimesheetByUserId (user_id: string): Promise<TimesheetsDTO[]> {
        try {
            return await this.repository.find({user_id});
        } catch ({ message }) {
            throw new Error(message);    
        }
    }
}

export default GetTimesheetByUserId;