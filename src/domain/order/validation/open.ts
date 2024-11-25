import { validate, Joi } from "express-validation";

export const create = validate({
  body: Joi.object({
    client: Joi.string().required(),
    items: Joi.array().items(
      Joi.object({
        product_id: Joi.string().required(),
        quantity: Joi.number().min(1).required(),
      })
    ).min(1).required(),
    payment: Joi.string().required(),
    note: Joi.string().allow(null, ''),
  }),
});
