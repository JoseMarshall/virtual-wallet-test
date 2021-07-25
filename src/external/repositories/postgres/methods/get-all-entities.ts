import { TimeStamps } from '../../../../constants';
import { safeParseInt } from '../../../../utils';
import { MakeGetAllEntityData } from '../postgres.types';

// eslint-disable-next-line import/prefer-default-export
export function makeGetAllEntities<T>({ model, options }: MakeGetAllEntityData<T>) {
  return async (query: {
    page: string;
    limit?: string;
    sortBy?: string;
    includeDeleted?: string;
  }) => {
    const { page, limit, sortBy, includeDeleted, ...filteredQuery } = query;
    const pageNumber = safeParseInt(page, 10);
    const docPerPage = safeParseInt(limit ?? '0', 10);
    const skip = docPerPage > 0 ? docPerPage * (pageNumber - 1) : 0;
    const sortByParsed = JSON.parse(sortBy ?? `{"${TimeStamps.UpdatedAt}":-1}`);
    const formattedQuery = options.formatQuery ? options.formatQuery(filteredQuery) : filteredQuery;

    const documents = await model.findAndCountAll({
      attributes: options.projection,
      where: includeDeleted ? { ...formattedQuery } : { isDeleted: false, ...formattedQuery },
      order: Object.keys(sortByParsed).map(key => [key, sortByParsed[key] === -1 ? 'DESC' : 'ASC']),
      limit: skip,
      offset: docPerPage || 15,
      include: options.include,
    });

    return {
      data: options.formatData
        ? options.formatData(documents.rows)
        : (documents.rows as ReadonlyArray<T>),
      count: documents.count,
    };
  };
}
