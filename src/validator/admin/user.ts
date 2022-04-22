import Joi from "joi";

export const userValidator = Joi.object<ADMIN_REQ.IAddUserRequest>({
  name: Joi.string()
    .required()
    .trim()
    .max(50)
    .regex(/^[A-z\s]+$/)
    .messages({
      "any.required": `"name" is required`,
      "string.empty": `"name" cannot be empty`,
      "string.max": `"name" cannot be more than 50 characters`,
      "string.pattern.base": `"name" must be alphabetic`,
    }),
  email: Joi.string().email().required().messages({
    "any.required": `"email" is required`,
    "string.empty": `"email" cannot be empty`,
    "string.email": `"email" must be a valid email"`,
  }),
  password: Joi.string().required().min(8).messages({
    "any.required": `"password" is required`,
    "string.empty": `"password" cannot be empty"`,
    "string.min": `"password" must be at least 8 characters`,
  }),
  role: Joi.string().valid("USER", "CT_ADMIN", "ADMIN").required().messages({
    "any.required": `"role" is required`,
    "string.empty": `"role" cannot be empty`,
    "string.base": `"role" must be either "USER" or "ADMIN" or "CT_ADMIN"`,
  }),
  org_id: Joi.number().required().messages({
    "any.required": `"org_id" is required`,
    "number.empty": `"org_id" cannot be empty`,
    "number.base": `"org_id" must be a number`,
  }),
});
