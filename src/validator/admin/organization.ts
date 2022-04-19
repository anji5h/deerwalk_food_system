import Joi from "joi";

export const orgValidator: Joi.Schema<ADMIN_REQ.IAddOrganizationRequest> = Joi.object({
  name: Joi.string().trim().required().lowercase().messages({
    "any.required": `"org_name" is required`,
    "string.empty": `"org_name" cannot be empty`,
  }),
  credit: Joi.number().required().messages({
    "any.required": `"credit" is required`,
    "number.empty": `"credit" cannot be empty`,
    "number.base": `"credit" must be a number`,
  }),
});
