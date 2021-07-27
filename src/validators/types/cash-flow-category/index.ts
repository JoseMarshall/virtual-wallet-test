import { CashFlowCategory, Common } from '../../../constants';
import { GetAll } from '../sub-types';

export interface UpdateCashFlowCategory {
  body: {
    [CashFlowCategory.Name]: string;
  };
  params: { [Common.Id]: string };
}

export interface GetAllCashFlowCategories extends GetAll {
  [CashFlowCategory.Name]?: string;
}

export interface GetOneCashFlowCategory {
  [Common.Id]: string;
}

export interface DeleteOneCashFlowCategory {
  [Common.Id]: string;
}
