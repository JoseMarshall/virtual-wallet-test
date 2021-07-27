import { IWalletRepository } from '../../external/repositories/repository.types';
import { GetAllWallets } from '../../validators/types/wallet';

// eslint-disable-next-line import/prefer-default-export
export function makeGetAllWalletsUC(repository: IWalletRepository) {
  return async (query: GetAllWallets) => ({ payload: await repository.findAllWallets(query) });
}
