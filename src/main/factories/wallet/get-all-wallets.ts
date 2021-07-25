import makeGetAllEntitiesController from '../../../controllers/get-all-entities';
import { walletRepository } from '../../../external/repositories/postgres/wallet-repository';
import { makeListWalletsUC } from '../../../usecases/list-wallets';
import { makeGetAllWalletsValidator } from '../../../validators/schemas/http-requests/wallet';

const createWallet = makeGetAllEntitiesController({
  findAll: makeListWalletsUC(walletRepository),
  requestValidator: makeGetAllWalletsValidator(),
});

export default createWallet;
