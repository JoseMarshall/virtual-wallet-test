import { IUnitOfWork } from '../repository.types';
import BaseRepository from './base-repository';
import { PostgreHelper } from './helpers/pg-helper';
import { CashFlowCategoryModel, CashFlowModel, CashFlowObservationModel } from './models';
import WalletRepository from './wallet-repository';

async function UnitOfWork() {
  const uow: IUnitOfWork = {
    transaction: null,
    makeWalletRepository() {
      return WalletRepository(this.transaction);
    },
    makeCashFlowRepository() {
      return BaseRepository(CashFlowModel, this.transaction);
    },
    makeCashFlowObservationRepository() {
      return BaseRepository(CashFlowObservationModel, this.transaction);
    },
    makeCashFlowCategoryRepository() {
      return BaseRepository(CashFlowCategoryModel, this.transaction);
    },
    commitChanges() {
      return this.transaction.commit();
    },
    rollback() {
      return this.transaction.rollback();
    },
    async startTransaction() {
      this.transaction = await PostgreHelper.getInstance().transaction();
    },
  };
  return uow;
}

export default UnitOfWork;
