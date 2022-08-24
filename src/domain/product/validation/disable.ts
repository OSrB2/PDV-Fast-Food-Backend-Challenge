import { validate, Joi } from "express-validation";

export const disable = validate({
  params: Joi.object({
    id: Joi.string().required(),
  }),
});
