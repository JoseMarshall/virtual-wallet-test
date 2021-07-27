import makeGetOneEntityController from '../../../controllers/get-one-entity';
import { walletRepository } from '../../../external/repositories/postgres/wallet-repository';
import { makeGetOneWalletUC } from '../../../usecases/get-one-wallet';
import { makeGetOneWalletValidator } from '../../../validators/schemas/http-requests/wallet';

const getOneWallet = makeGetOneEntityController({
  findOne: makeGetOneWalletUC(walletRepository),
  requestValidator: makeGetOneWalletValidator(),
});

export default getOneWallet;
