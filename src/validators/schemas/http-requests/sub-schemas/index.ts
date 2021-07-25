import joi from 'joi';

import { limitQueryRegex, pageQueryRegex, sortByStringfiedRegex } from '../../../../utils/regex';

export const getAllSchema = {
  page: joi.string().required().regex(pageQueryRegex),
  limit: joi.string().regex(limitQueryRegex),
  sortBy: joi.string().pattern(sortByStringfiedRegex),
};

export const idSchema = {
  id: joi.string().uuid({ version: 'uuidv4' }).required(),
};
