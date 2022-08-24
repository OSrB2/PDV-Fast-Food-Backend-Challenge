import { validate, Joi } from "express-validation";

export const create = validate({
  body: Joi.object({
    client: Joi.string().required(),
    product_id: Joi.string().required(),
    total: Joi.number().required(),
    payment: Joi.string().required(),
    note: Joi.string(),
  }),
});
