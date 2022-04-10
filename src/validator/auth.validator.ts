import joi from "joi";

export const loginValidator = joi.object<AUTH_REQ.ILoginRequest>({
  email: joi.string().email().required().messages({
    "any.required": `"email" is required`,
    "string.empty": `"email" cannot be empty`,
  }),
  password: joi.string().required().messages({
    "string.empty": `"password" cannot be empty`,
    "any.required": `"password" is required`,
  }),
});
