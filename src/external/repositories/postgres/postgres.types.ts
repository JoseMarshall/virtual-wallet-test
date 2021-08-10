import { Includeable, ModelCtor, Transaction } from 'sequelize';

export interface MakeGetAllEntitiesDependencies<K> {
  projection?: string[];
  formatData?: (data: ReadonlyArray<any>) => ReadonlyArray<K>;
  formatQuery?: (query: Record<string, string> | {}) => Record<string, unknown>;
  include?: Includeable | Includeable[];
}

export interface MakeGetOneEntityDependencies<K> {
  projection?: string[];
  include?: Includeable | Includeable[];
  formatData?: (data: any) => K;
}

export interface MakeGetOneEntityData<K> {
  model: ModelCtor<any>;
  options: MakeGetOneEntityDependencies<K>;
}

export interface MakeGetAllEntityData<K> {
  model: ModelCtor<any>;
  options: MakeGetAllEntitiesDependencies<K>;
}

export interface MakeUpdateOneEntityData {
  model: ModelCtor<any>;
  transaction: Transaction;
}

export interface MakeCreateEntityData {
  model: ModelCtor<any>;
  transaction: Transaction;
}

export interface MakeDeleteOneEntityData {
  model: ModelCtor<any>;
  transaction: Transaction;
}
