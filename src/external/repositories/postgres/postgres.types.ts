import { Includeable, ModelCtor } from 'sequelize';

import { Common, TimeStamps } from '../../../constants';

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

export interface GetAllEntitiesData<T> {
  data: ReadonlyArray<T>;
  count: number;
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
}

export interface MakeCreateEntityData {
  model: ModelCtor<any>;
}

export interface MakeDeleteOneEntityData {
  model: ModelCtor<any>;
}

export interface DeletedEntity {
  [Common.Id]: string;
  [Common.IsDeleted]: boolean;
  [TimeStamps.CreatedAt]: string;
  [TimeStamps.UpdatedAt]: string;
}
