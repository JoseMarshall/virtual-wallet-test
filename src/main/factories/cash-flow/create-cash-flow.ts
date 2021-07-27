import makeCreateEntityController from '../../../controllers/create-entity';
import { ICashFlow, ICashFlowInput } from '../../../entities/cash-flow/cash-flow.types';
import { cashFlowRepository } from '../../../external/repositories/postgres/cash-flow-repository';
import { makeCashFlowUC } from '../../../usecases/regist-cash-flow';
import { makeCreateCashFlowValidator } from '../../../validators/schemas/http-requests/cash-flow';

const createCashFlow = makeCreateEntityController<ICashFlow, ICashFlowInput>({
  create: makeCashFlowUC(cashFlowRepository),
  requestValidator: makeCreateCashFlowValidator(),
});

export default createCashFlow;
