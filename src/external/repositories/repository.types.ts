import { IWallet } from '../../entities/wallet/wallet.types';
import { GetAllEntitiesData } from './postgres/postgres.types';

export interface IGetAllQuery extends Record<string, any> {
  page: string;
  limit?: string;
  sortBy?: string;
  includeDeleted?: string;
}

export interface IWalletRepository {
  findAllWallets(query: IGetAllQuery): Promise<GetAllEntitiesData<IWallet>>;
  findWalletById(id: string): Promise<IWallet>;
  save(wallet: IWallet): Promise<IWallet>;
}
