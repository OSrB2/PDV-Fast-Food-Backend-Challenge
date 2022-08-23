import { validate, Joi } from "express-validation";

export const update = validate({
  params: Joi.object({
    id: Joi.string().required(),
  }),
});
