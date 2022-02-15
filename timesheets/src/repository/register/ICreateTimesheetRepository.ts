import TimesheetsDTO from "../../dto/TimesheetsDTO";

interface ICreateTimesheetRepository {
    create(timesheet: TimesheetsDTO): Promise<TimesheetsDTO>;
}

export default ICreateTimesheetRepository;