import { Model, ModelCtor, Transaction } from 'sequelize';

import { Entity } from '../../../entities/entity.types';
import { GetAll, GetOne } from '../../../validators/types/sub-types';
import { IRepository } from '../repository.types';
import {
  makeCreateEntity,
  makeCreateManyEntities,
  makeDeleteOneEntity,
  makeGetAllEntities,
  makeGetOneEntity,
  makeUpdateOneEntity,
} from './methods';

function BaseRepository<T>(
  model: ModelCtor<Model<any, any>>,
  transaction: Transaction
): IRepository<T> {
  const repository: IRepository<T> = {
    async add(entity: T) {
      return makeCreateEntity<T>({ model, transaction })(entity);
    },
    async addRange(entities: T[]) {
      return makeCreateManyEntities<T>({ model, transaction })(entities);
    },
    async get(query: GetOne, options: Record<string, any>) {
      return makeGetOneEntity<T>({ model, options })(query);
    },
    async getAll(query: GetAll, options: Record<string, any>) {
      return makeGetAllEntities<T>({ model, options })(query);
    },
    async remove(query: GetOne) {
      return makeDeleteOneEntity({ model, transaction })(query);
    },
    async update(query: GetOne, body: Omit<Record<string, any>, keyof Entity>) {
      return makeUpdateOneEntity<T>({ model, transaction })(query, body);
    },
  };
  return repository;
}

export default BaseRepository;
