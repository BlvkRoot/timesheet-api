import GetTimesheetByUserIdController from '../../controllers/listByUser/GetTimesheetByUserIdController';
import GetTimesheetByUserIdRepository from '../../repository/listByUser/GetTimesheetByUserIdRepository';
import GetTimesheetByUserIdService from '../../services/listByUser/GetTimesheetByUserIdService';

const getTimesheetByUserIdFactory = () => {
  const getTimesheetByUserIdRepository = new GetTimesheetByUserIdRepository();
  const getTimesheetByUserIdService = new GetTimesheetByUserIdService(
    getTimesheetByUserIdRepository
  );
  const getTimesheetByUserIdController = new GetTimesheetByUserIdController(
    getTimesheetByUserIdService
  );
  return getTimesheetByUserIdController;
};

export default getTimesheetByUserIdFactory;
