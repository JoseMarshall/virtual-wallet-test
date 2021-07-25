import { RequestValidator } from '../controllers.types';

export interface MakeCreateOneEntityDependencies<T, K> {
  create: (body: K) => Promise<{ payload: T }>;
  requestValidator: RequestValidator<K>;
}
