import { RequestValidator } from '../controllers.types';

export interface MakeGetOneEntityDependencies<T, K> {
  findOne: (query: K) => Promise<{ payload: T }>;
  requestValidator: RequestValidator<K>;
  queryFormatter?: (query: K) => K;
}
