import TimesheetsDTO from "../../dto/TimesheetsDTO";
import ICreateTimesheetRepository from "./ICreateTimesheetRepository";

class CreateTimesheetRepository implements ICreateTimesheetRepository {
    async create({
        user_id,
        project_type,
        project_title,
        project_description,
        project_hours
    }: TimesheetsDTO): Promise<TimesheetsDTO> {
        try {
            // const timesheet = {
        //     user_id: "2e52e11b-2ea2-42d9-8d32-db15630b4298",
        //     project_type: "internal",
        //     project_title: "Balance Balance",
        //     project_description: "Balance of balance balanced",
        //     project_hours: 8
        // };
        return new Promise((resolve, reject) => resolve({
            user_id: "2e52e11b-2ea2-42d9-8d32-db15630b4298",
            project_type: "internal",
            project_title: "Balance Balance",
            project_description: "Balance of balance balanced",
            project_hours: 8
        }));
        } catch (error) {
            throw new Error('kjjkhkjkhkh');
        }
    }
}

export default CreateTimesheetRepository;