import { validate, Joi } from "express-validation";

export const remove = validate({
  params: Joi.object({
    id: Joi.string().required(),
  }),
});
