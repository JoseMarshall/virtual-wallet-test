import { RequestValidator } from '../controllers.types';

export interface MakeDeleteEntityDependencies<T, K> {
  deleteAll: (query: K) => Promise<{ payload: T }>;
  requestValidator: RequestValidator<K>;
}
