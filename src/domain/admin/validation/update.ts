import { validate, Joi } from "express-validation";

export const update = validate({
  params: Joi.object({
    id: Joi.string().required(),
  }),
  body: Joi.object({
    name: Joi.string().min(3).max(70).required(),
    email: Joi.string().email().max(70).required(),
    password: Joi.string().min(8).max(120).required(),
  }),
});
