import { Transaction } from 'sequelize';

import { Common, TimeStamps } from '../../constants';
import { ICashFlow } from '../../entities/cash-flow/cash-flow.types';
import { ICashFlowCategory } from '../../entities/cash-flow-category/cash-flow-category.types';
import { ICashFlowObservation } from '../../entities/cash-flow-observation/cash-flow-observation.types';
import { Entity } from '../../entities/entity.types';
import { ITansferAmount, IWallet } from '../../entities/wallet/wallet.types';
import { GetAll, GetOne } from '../../validators/types/sub-types';

export interface GetAllEntitiesData<T> {
  data: ReadonlyArray<T>;
  count: number;
}

export interface DeletedEntity {
  [Common.Id]: string;
  [Common.IsDeleted]: boolean;
  [TimeStamps.CreatedAt]: string;
  [TimeStamps.UpdatedAt]: string;
}

export interface IRepository<T> {
  add(entity: T): Promise<T>;
  addRange(entities: T[]): Promise<T[]>;

  update(query: GetOne, body: Omit<Record<string, any>, keyof Entity>): Promise<T>;

  remove(query: GetOne): Promise<DeletedEntity>;

  get<O>(query: GetOne, options: O): Promise<T>;
  getAll<O>(query: GetAll, options: O): Promise<GetAllEntitiesData<T>>;
}

export interface IWalletRepository extends IRepository<IWallet> {
  hasWalletEnoughFunds(
    query: GetOne,
    value: string
  ): Promise<{ enough: boolean; missingAmount: number }>;

  transferAmount(data: ITansferAmount): Promise<void>;
}

export interface IUnitOfWork {
  transaction?: Transaction;
  makeWalletRepository: () => IWalletRepository;
  makeCashFlowRepository: () => IRepository<ICashFlow>;
  makeCashFlowObservationRepository: () => IRepository<ICashFlowObservation>;
  makeCashFlowCategoryRepository: () => IRepository<ICashFlowCategory>;
  commitChanges(): Promise<void>;
  rollback(): Promise<void>;
  startTransaction(): Promise<void>;
}
