import { ICashFlow } from '../../entities/cash-flow/cash-flow.types';
import {
  ICashFlowCategory,
  ICashFlowCategoryInput,
} from '../../entities/cash-flow-category/cash-flow-category.types';
import { ICashFlowObservation } from '../../entities/cash-flow-observation/cash-flow-observation.types';
import { IWallet } from '../../entities/wallet/wallet.types';
import {
  GetAllCashFlowCategories,
  GetOneCashFlowCategory,
} from '../../validators/types/cash-flow-category';
import { GetAllWallets, GetOneWallet } from '../../validators/types/wallet';
import { GetAllEntitiesData } from './postgres/postgres.types';

export interface IWalletRepository {
  findAllWallets(query: GetAllWallets): Promise<GetAllEntitiesData<IWallet>>;
  findOne(query: GetOneWallet): Promise<IWallet>;
  save(wallet: IWallet): Promise<IWallet>;
}

export interface ICashFlowRepository {
  save(cashFlow: ICashFlow): Promise<ICashFlow>;
}

export interface ICashFlowObservationRepository {
  save(observations: ICashFlowObservation[]): Promise<ICashFlowObservation[]>;
}

export interface ICashFlowCategoryRepository {
  findAll(query: GetAllCashFlowCategories): Promise<GetAllEntitiesData<ICashFlowCategory>>;
  findOne(query: GetOneCashFlowCategory): Promise<ICashFlowCategory>;
  update(req: { params: { id: string }; body: ICashFlowCategoryInput }): Promise<ICashFlowCategory>;
  save(wallet: ICashFlowCategory): Promise<ICashFlowCategory>;
}
