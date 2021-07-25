import { makeCreateWalletValidator } from '../../../validators/schemas/http-requests/wallet';
import makeCreateEntityController from '../../../controllers/create-one-entity';
import { IWallet, IWalletInput } from '../../../entities/wallet/wallet.types';
import { walletRepository } from '../../../external/repositories/postgres/wallet-repository';
import { makeCreateWalletUC } from '../../../usecases/create-wallet';

const createWallet = makeCreateEntityController<IWallet, IWalletInput>({
  create: makeCreateWalletUC(walletRepository),
  requestValidator: makeCreateWalletValidator(),
});

export default createWallet;
