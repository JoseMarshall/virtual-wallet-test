import makeGetAllEntitiesController from '../../../controllers/get-all-entities';
import { walletRepository } from '../../../external/repositories/postgres/wallet-repository';
import { makeGetAllWalletsUC } from '../../../usecases/get-all-wallets';
import { makeGetAllWalletsValidator } from '../../../validators/schemas/http-requests/wallet';

const getAllWallets = makeGetAllEntitiesController({
  findAll: makeGetAllWalletsUC(walletRepository),
  requestValidator: makeGetAllWalletsValidator(),
});

export default getAllWallets;
