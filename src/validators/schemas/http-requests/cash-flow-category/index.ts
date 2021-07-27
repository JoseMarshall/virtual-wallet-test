import { HttpRequest } from '../../../../controllers/controllers.types';
import createCashFlowCategorySchemaValidator from './create-cash-flow-category-schema';
import getAllCashFlowCategoriesSchemaValidator from './get-all-cash-flow-categories-schema';
import getOneCashFlowCategorySchemaValidator from './get-one-cash-flow-category-schema';
import updateCashFlowCategorySchemaValidator from './update-cash-flow-category-schema';

// eslint-disable-next-line import/prefer-default-export
export const makeCreateCashFlowCategoryValidator = () => async (req: HttpRequest) =>
  createCashFlowCategorySchemaValidator(req.body);

export const makeUpdateCashFlowCategoryValidator = () => async (req: HttpRequest) =>
  updateCashFlowCategorySchemaValidator(req);

export const makeGetAllCashFlowCategoriesValidator = () => async (req: HttpRequest) =>
  getAllCashFlowCategoriesSchemaValidator(req.query);

export const makeGetOneCashFlowCategoryValidator = () => async (req: HttpRequest) =>
  getOneCashFlowCategorySchemaValidator(req.params);
