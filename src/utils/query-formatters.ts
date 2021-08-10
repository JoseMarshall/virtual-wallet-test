import { Op } from 'sequelize';

/**
 * @description Add a number of days to a Date
 * @param date The date you intend to add days to
 * @param days The number of days you intend to add, N.B.: You can pass negative numbers if you intend to subtract days instead of add
 * @returns The new date added the specified number of days
 */
export function addDays(date: Date, days: number) {
  const newDate = new Date(Number(date));
  newDate.setDate(date.getDate() + days);
  return newDate.getDate() ? newDate : undefined;
}

/**
 * @description Apply a case insensitive regex pattern to a string
 * @param x The string to apply the regex to
 * @returns a RegExp object which does case insensitive matching with all text containing the passed string
 */
export const makeCaseInsensitiveRegex = (x: string) => ({
  [Op.regexp]: new RegExp(`.*${x}.*`, 'i'),
});

/**
 * @description Apply a formation to an object, applying the case insensitive regex pattern on each its string entries
 * @param query The object to format
 * @returns An object with case insensitive regex pattern in all of its string entries
 */
export const formatQueryToRegex = (query: Record<string, string | string[]>) =>
  Object.keys(query).reduce((acc: Record<string, any>, queryKey: string) => {
    const value = query[queryKey];
    return typeof value !== 'string'
      ? { ...acc, [queryKey]: value }
      : { ...acc, [queryKey]: makeCaseInsensitiveRegex(value) };
  }, {});

export interface RangeKey {
  /**
   * The name of the key to be formatted, if the query object does not contain this key, it will be ignored
   */
  name: string;
  /**
   * The compensation for the higher limit, because it comparison is done using "less than",
   * The default value is 1
   */
  accuracy?: number;
  /**
   * The element to be used to split the range range, and determine the limit start and end,
   * the default value is " to "
   */
  splitter?: string;
  /**
   * The type of this data, it can be a number or date,
   * The default value is date
   */
  dataType?: 'date' | 'number';
}

/**
 * @description Apply for each specified key a range query that can be understandable by MongoBd,
 * if the specified key don't exist in the query object it will be ignored
 * In case of numbers if one of the specified limit is invalid, it will be replaced by zero (0)
 * In case of dates if one of the specified limit is invalid, this limit will not be applied to
 * @param query The object to format, which contains the keys specified in rangeKeys argument
 * @param rangeKeys An array of params to be applied to the query formatting
 * @returns An object with specified keys formatted to mongodb range
 */
export function formatQueryToRange<T>(query: Record<string, any>, rangeKeys: RangeKey[]) {
  return rangeKeys.reduce<T>((acc: T, rangeKey: RangeKey) => {
    const value = query[rangeKey.name];
    if (typeof value !== 'string' || !value?.includes(rangeKey.splitter ?? ' to '))
      return { ...query, ...acc };

    const [startFrom, endTo] = value.split(rangeKey.splitter ?? ' to ');

    const mapValue = {
      number: () => ({
        [Op.gte]: Number(startFrom) || 0,
        [Op.lt]: Number(endTo) + (rangeKey.accuracy ?? 1) || 0,
      }),
      date: () => {
        const dateAdded = addDays(new Date(endTo), rangeKey.accuracy ?? 1);

        return {
          ...(new Date(startFrom).getDate()
            ? {
                [Op.gte]: new Date(startFrom),
              }
            : {}),
          ...(dateAdded
            ? {
                [Op.lt]: dateAdded,
              }
            : {}),
        };
      },
    };

    const { [rangeKey.name]: keyToBeRemoved, ...filteredQuery } = query;

    return {
      ...filteredQuery,
      ...acc,
      [rangeKey.name]: mapValue[rangeKey.dataType ?? 'date'](),
    } as T;
  }, {} as T);
}
