import TimesheetsDTO from "../../dto/TimesheetsDTO";

interface ICreateTimesheetService {
    execute(timesheet: TimesheetsDTO): Promise<TimesheetsDTO>;
}

export default ICreateTimesheetService