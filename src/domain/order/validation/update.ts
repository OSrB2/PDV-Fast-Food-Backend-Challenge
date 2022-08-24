import { validate, Joi } from "express-validation";

export const update = validate({
  body: Joi.object({
    product_id: Joi.string().required(),
    total: Joi.number().required(),
    situation: Joi.string(),
    payment: Joi.string().required(),
    note: Joi.string(),
  }),
});
