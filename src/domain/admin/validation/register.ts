import { validate, Joi } from "express-validation";

export const register = validate({
  body: Joi.object({
    name: Joi.string().min(3).max(70).required(),
    email: Joi.string().email().max(70).required(),
    password: Joi.string().min(8).max(120).required(),
  }),
});
