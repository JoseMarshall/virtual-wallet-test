import { IWalletRepository } from '../../external/repositories/repository.types';
import { GetOneWallet } from '../../validators/types/wallet';

// eslint-disable-next-line import/prefer-default-export
export function makeGetOneWalletUC(repository: IWalletRepository) {
  return async (query: GetOneWallet) => ({ payload: await repository.findOne(query) });
}
