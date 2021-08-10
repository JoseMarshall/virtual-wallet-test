import BigMoneyFactory from 'bigint-money';
import { Transaction } from 'sequelize';

import { Wallet } from '../../../constants';
import { Entity } from '../../../entities/entity.types';
import { ITansferAmount, IWallet } from '../../../entities/wallet/wallet.types';
import { GetAll, GetOne } from '../../../validators/types/sub-types';
import { IWalletRepository } from '../repository.types';
import { queryGuard } from './helpers/pg-helper';
import {
  makeCreateEntity,
  makeCreateManyEntities,
  makeDeleteOneEntity,
  makeGetAllEntities,
  makeGetOneEntity,
  makeUpdateOneEntity,
} from './methods';
import { WalletModel } from './models';

function WalletRepository(transaction: Transaction): IWalletRepository {
  const repository: IWalletRepository = {
    async add(entity: IWallet) {
      return makeCreateEntity<IWallet>({ model: WalletModel, transaction })(entity);
    },
    async addRange(entities: IWallet[]) {
      return makeCreateManyEntities<IWallet>({ model: WalletModel, transaction })(entities);
    },
    async get(query: GetOne, options: Record<string, any>) {
      return makeGetOneEntity<IWallet>({ model: WalletModel, options })(query);
    },
    async getAll(query: GetAll, options: Record<string, any>) {
      return makeGetAllEntities<IWallet>({ model: WalletModel, options })(query);
    },
    async remove(query: GetOne) {
      return makeDeleteOneEntity({ model: WalletModel, transaction })(query);
    },
    async update(query: GetOne, body: Omit<Record<string, any>, keyof Entity>) {
      return makeUpdateOneEntity<IWallet>({ model: WalletModel, transaction })(query, body);
    },
    async hasWalletEnoughFunds(query: GetOne, value: string) {
      const wallet = await queryGuard<IWallet>(
        WalletModel.findOne<any>({
          where: { id: query.id, isDeleted: false },
          attributes: [Wallet.CurrentValue, Wallet.Currency],
        })
      );

      const amountDiff = new BigMoneyFactory(wallet.currentValue.toString(), wallet.currency)
        .subtract(value.toString())
        .toJSON();

      return Number(amountDiff[0]) >= 0
        ? { enough: true, missingAmount: 0 }
        : { enough: false, missingAmount: Number(amountDiff[0]) };
    },
    async transferAmount(data: ITansferAmount) {
      await queryGuard(
        WalletModel.increment<any>(
          { [Wallet.CurrentValue]: -Number(data.value) },
          {
            where: { id: data.sender, isDeleted: false },
            transaction,
          }
        )
      );

      await queryGuard(
        WalletModel.increment<any>(
          { [Wallet.CurrentValue]: Number(data.value) },
          {
            where: { id: data.receiver, isDeleted: false },
            transaction,
          }
        )
      );
    },
  };
  return repository;
}

export default WalletRepository;
