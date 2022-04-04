import joi from "joi";

export const signupValidator = joi.object({
  name: joi
    .string()
    .required()
    .max(50)
    .regex(/^[A-z\s]+$/)
    .messages({
      "any.required": `"name" is required`,
      "string.empty": `"name" cannot be empty`,
      "string.max": `"name" cannot be more than 50 characters`,
      "string.pattern.base": `"name" must be alphabetic`,
    }),
  email: joi.string().email().required().messages({
    "any.required": `"email" is required`,
    "string.empty": `"email" cannot be empty`,
    "string.email": `"email" must be a valid email"`,
  }),
  password: joi.string().required().min(8).messages({
    "any.required": `"password" is required`,
    "string.empty": `"password" cannot be empty"`,
    "string.min": `"password" must be at least 8 characters`,
  }),
  org_id: joi.number().required().messages({
    "any.required": `"org_id" is required`,
    "number.empty": `"org_id" cannot be empty`,
    "number.base": `"org_id" must be a number`,
  }),
});

export const loginValidator = joi.object({
  email: joi.string().email().required().messages({
    "any.required": `"email" is required`,
    "string.empty": `"email" cannot be empty`,
  }),
  password: joi.string().required().messages({
    "string.empty": `"password" cannot be empty`,
    "any.required": `"password" is required`,
  }),
});
