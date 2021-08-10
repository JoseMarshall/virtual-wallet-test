import { ApiErrorsName, ApiErrorsType } from '../../constants';
import { makeCashFlow } from '../../entities/cash-flow';
import { ICashFlowInput } from '../../entities/cash-flow/cash-flow.types';
import uow from '../../external/repositories/postgres/unit-of-work';
import apiMessages from '../../locales/pt/api-server.json';
import CustomError from '../../utils/custom-error';

// eslint-disable-next-line import/prefer-default-export
export function makeCashFlowUC() {
  return async (data: ICashFlowInput) => {
    const unitOfWork = await uow();
    try {
      await unitOfWork.startTransaction();
      const walletRepo = unitOfWork.makeWalletRepository();
      const cashFlowRepo = unitOfWork.makeCashFlowRepository();

      const walletFundsCalculated = await walletRepo.hasWalletEnoughFunds(
        { id: data.sender },
        data.value
      );

      if (!walletFundsCalculated.enough) {
        throw new CustomError({
          statusCode: 402,
          name: ApiErrorsName.NotEnoughFunds,
          type: ApiErrorsType.FundsError,
          message: apiMessages['W-2000'],
          i18nCode: 'W-2000',
          stack: new Error().stack,
          details: {
            ...walletFundsCalculated,
            msg: 'You have not enough funds to complete this operation',
          },
        });
      }

      const predicateTransfering = await walletRepo.transferAmount({
        receiver: data.receiver,
        sender: data.sender,
        value: data.value,
      });

      if (predicateTransfering) {
        throw new CustomError({
          statusCode: 402,
          name: ApiErrorsName.GenericName,
          type: ApiErrorsType.FundsError,
          message: apiMessages['W-2001'],
          i18nCode: 'W-2001',
          stack: new Error().stack,
          details: { msg: 'You cannot transfer money to accounts that is in a different currency' },
        });
      }

      const createdCashFlow = await cashFlowRepo.add(makeCashFlow(data));
      await unitOfWork.commitChanges();

      return {
        payload: createdCashFlow,
      };
    } catch (error) {
      await unitOfWork.rollback();
      throw error instanceof CustomError
        ? error
        : new CustomError({
            statusCode: 422,
            name: ApiErrorsName.GenericName,
            type: ApiErrorsType.GenericType,
            message: apiMessages['E-1006'],
            i18nCode: 'E-1006',
            stack: error.stack,
            details: error,
          });
    }
  };
}
