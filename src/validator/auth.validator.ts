import joi from "joi";

export const signupValidator = joi.object({
  name: joi
    .string()
    .required()
    .max(50)
    .regex(/^[A-z\s]+$/)
    .messages({
      "string.empty": "Name cannot be empty",
      "string.max": "Name cannot be more than 50 characters",
      "string.pattern.base": "Name must be alphabetic",
    }),
  email: joi.string().email().required().messages({
    "string.empty": "Email cannot be empty",
    "string.email": "Email must be a valid email",
  }),
  password: joi.string().required().min(8).messages({
    "string.empty": "Password cannot be empty",
    "string.min": "Password must be at least 8 characters",
  }),
});

export const loginValidator = joi.object({
  email: joi.string().email().required().messages({
    "string.email": "Email is not valid",
    "string.empty": "Email is required",
  }),
  password: joi.string().required().messages({
    "string.empty": "Password is required",
  }),
});
