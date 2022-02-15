import CreateTimesheetController from "../../controllers/register/CreateTimesheetController";
import CreateTimesheetRepository from "../../repository/register/CreateTimesheetRepository"
import CreateTimesheetService from "../../services/register/CreateTimesheetService";

const createTimesheetFactory = () => {
    const timesheetRepository = new CreateTimesheetRepository();
    const timesheetService = new CreateTimesheetService(timesheetRepository);
    const timesheetController = new CreateTimesheetController(timesheetService);
    return timesheetController;
}

export default createTimesheetFactory