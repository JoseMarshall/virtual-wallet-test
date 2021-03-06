import { RequestValidator } from '../controllers.types';

interface Records<T> {
  data: ReadonlyArray<T>;
  count: number;
}
export interface MakeGetAllEntitiesDependencies<T, K> {
  findAll: (query: K) => Promise<{ payload: Records<T> }>;
  requestValidator: RequestValidator<K>;
  queryFormatter?: (query: K) => K;
}
