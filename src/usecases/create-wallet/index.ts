import { makeWallet } from '../../entities/wallet';
import { IWalletInput } from '../../entities/wallet/wallet.types';
import { IWalletRepository } from '../../external/repositories/repository.types';

// eslint-disable-next-line import/prefer-default-export
export function makeCreateWalletUC(repository: IWalletRepository) {
  return async (data: IWalletInput) => ({ payload: await repository.save(makeWallet(data)) });
}
