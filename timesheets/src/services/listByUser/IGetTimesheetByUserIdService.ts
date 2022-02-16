import TimesheetsDTO from "../../dto/TimesheetsDTO";

interface IGetTimesheetByUserIdService {
    execute({user_id: string}): Promise<TimesheetsDTO[]>;
}

export default IGetTimesheetByUserIdService