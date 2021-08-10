import { TimeStamps } from '../../../constants';
import makeGetAllEntitiesController from '../../../controllers/get-all-entities';
import { ICashFlow } from '../../../entities/cash-flow/cash-flow.types';
import { makeGetAllCashFlowsUC } from '../../../usecases/get-all-cash-flows';
import { formatQueryToRange } from '../../../utils/query-formatters';
import { makeGetAllCashFlowsValidator } from '../../../validators/schemas/http-requests/cash-flow';
import { GetAllCashFlows } from '../../../validators/types/cash-flow';

const getAllCashFlows = makeGetAllEntitiesController<ICashFlow, GetAllCashFlows>({
  findAll: makeGetAllCashFlowsUC(),
  requestValidator: makeGetAllCashFlowsValidator(),
  queryFormatter: (query: GetAllCashFlows) =>
    formatQueryToRange(query, [
      { name: TimeStamps.UpdatedAt, accuracy: 1, splitter: ' to ', dataType: 'date' },
    ]),
});

export default getAllCashFlows;
