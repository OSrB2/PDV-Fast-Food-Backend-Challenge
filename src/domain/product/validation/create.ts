import { validate, Joi } from "express-validation";

export const create = validate({
  body: Joi.object({
    name: Joi.string().min(3).max(70).required(),
    product_code: Joi.number().required(),
    description: Joi.string().max(300).required(),
    price: Joi.number().required(),
  }),
});
