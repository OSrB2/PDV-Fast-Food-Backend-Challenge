import { validate, Joi } from "express-validation";

export const close = validate({
  params: Joi.object({
    id: Joi.string().required(),
  }),
});
