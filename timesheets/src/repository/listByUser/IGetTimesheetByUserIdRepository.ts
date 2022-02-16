import TimesheetsDTO from "../../dto/TimesheetsDTO";

interface IGetTimesheetByUserId {
    getTimesheetByUserId(user_id: string): Promise<TimesheetsDTO[]>;
}

export default IGetTimesheetByUserId;