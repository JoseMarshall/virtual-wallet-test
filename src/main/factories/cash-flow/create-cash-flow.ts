import makeCreateEntityController from '../../../controllers/create-entity';
import { ICashFlow, ICashFlowInput } from '../../../entities/cash-flow/cash-flow.types';
import { makeCashFlowUC } from '../../../usecases/create-cash-flow';
import { makeCreateCashFlowValidator } from '../../../validators/schemas/http-requests/cash-flow';

const createCashFlow = makeCreateEntityController<ICashFlow, ICashFlowInput>({
  create: makeCashFlowUC(),
  requestValidator: makeCreateCashFlowValidator(),
});

export default createCashFlow;
