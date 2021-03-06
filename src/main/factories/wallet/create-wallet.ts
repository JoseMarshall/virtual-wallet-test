import makeCreateEntityController from '../../../controllers/create-entity';
import { IWallet, IWalletInput } from '../../../entities/wallet/wallet.types';
import { walletRepository } from '../../../external/repositories/postgres/wallet-repository';
import { makeCreateWalletUC } from '../../../usecases/create-wallet';
import { makeCreateWalletValidator } from '../../../validators/schemas/http-requests/wallet';

const createWallet = makeCreateEntityController<IWallet, IWalletInput>({
  create: makeCreateWalletUC(walletRepository),
  requestValidator: makeCreateWalletValidator(),
});

export default createWallet;
