import { validate, Joi } from "express-validation";

export const create = validate({
  body: Joi.object({
    name: Joi.string().min(3).max(70).required(),
  }),
});
