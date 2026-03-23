import { Joi, Segments } from 'celebrate';
import { TAGS } from '../constans/tags';

export const getAllNotesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1),
    tag: Joi.string().valid(TAGS),
    search: Joi.string(),
  }),
};
