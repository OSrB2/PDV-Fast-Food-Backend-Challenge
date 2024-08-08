import { validate, Joi } from "express-validation";

export const create = validate({
  body: Joi.object({
    client: Joi.string().required(),
    product_id: Joi.string().required(),
    quantity: Joi.number().required(),
    total: Joi.number(),
    payment: Joi.string().required(),
    note: Joi.string(),
  }),
});
