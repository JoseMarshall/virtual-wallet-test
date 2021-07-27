import { ApiErrorsName, ApiErrorsType } from '../../../constants/errors';
import {
  ICashFlowCategory,
  ICashFlowCategoryInput,
} from '../../../entities/cash-flow-category/cash-flow-category.types';
import apiMessages from '../../../locales/pt/api-server.json';
import CustomError from '../../../utils/custom-error';
import {
  GetAllCashFlowCategories,
  GetOneCashFlowCategory,
} from '../../../validators/types/cash-flow-category';
import { ICashFlowCategoryRepository } from '../repository.types';
import {
  makeCreateEntity,
  makeGetAllEntities,
  makeGetOneEntity,
  makeUpdateOneEntity,
} from './methods';
import { CashFlowCategoryModel } from './models';

async function findAll(query: GetAllCashFlowCategories) {
  try {
    return makeGetAllEntities<ICashFlowCategory>({ model: CashFlowCategoryModel, options: {} })(
      query
    );
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

async function findOne(query: GetOneCashFlowCategory) {
  try {
    return makeGetOneEntity<ICashFlowCategory>({ model: CashFlowCategoryModel, options: {} })(
      query
    );
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

async function save(category: ICashFlowCategory) {
  try {
    return makeCreateEntity<ICashFlowCategory>({ model: CashFlowCategoryModel })(category);
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

async function update(req: { params: { id: string }; body: ICashFlowCategoryInput }) {
  try {
    return makeUpdateOneEntity<ICashFlowCategory>({ model: CashFlowCategoryModel })(req);
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
export const cashFlowCategoryRepository: ICashFlowCategoryRepository = {
  findAll,
  findOne,
  update,
  save,
};
