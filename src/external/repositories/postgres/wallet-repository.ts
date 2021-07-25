import { ApiErrorsName, ApiErrorsType } from '../../../constants/errors';
import { IWallet } from '../../../entities/wallet/wallet.types';
import apiMessages from '../../../locales/pt/api-server.json';
import CustomError from '../../../utils/custom-error';
import { IGetAllQuery, IWalletRepository } from '../repository.types';
import { makeCreateEntity, makeGetAllEntities, makeGetOneEntity } from './methods';
import { WalletModel } from './models';

async function findAllWallets(query: IGetAllQuery) {
  try {
    return makeGetAllEntities<IWallet>({ model: WalletModel, options: {} })(query);
  } catch (error) {
    throw new CustomError({
      statusCode: 422,
      name: ApiErrorsName.GenericName,
      type: ApiErrorsType.GenericType,
      message: apiMessages['E-1008'],
      i18nCode: 'E-1008',
      stack: error.stack,
      details: error,
    });
  }
}

async function findWalletById(id: string) {
  try {
    return makeGetOneEntity<IWallet>({ model: WalletModel, options: {} })({ id });
  } catch (error) {
    throw new CustomError({
      statusCode: 404,
      name: ApiErrorsName.GenericName,
      type: ApiErrorsType.GenericType,
      message: apiMessages['E-1009'],
      i18nCode: 'E-1009',
      stack: error.stack,
      details: error,
    });
  }
}

async function save(wallet: IWallet) {
  try {
    return makeCreateEntity<IWallet>({ model: WalletModel })(wallet);
  } catch (error) {
    throw new CustomError({
      statusCode: 422,
      name: ApiErrorsName.MissingFields,
      type: ApiErrorsType.ValidationError,
      message: apiMessages['E-1006'],
      i18nCode: 'E-1006',
      stack: error.stack,
      details: error,
    });
  }
}

// eslint-disable-next-line import/prefer-default-export
export const walletRepository: IWalletRepository = {
  findAllWallets,
  findWalletById,
  save,
};
