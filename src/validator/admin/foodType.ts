import Joi from "joi";

export const foodTypeValidator: Joi.Schema<ADMIN_REQ.IAddItemTypeRequest> = Joi.object({
  name: Joi.string().trim().required().lowercase().messages({
    "any.required": `"food_type" is required`,
    "string.empty": `"food_type" cannot be empty`,
  }),
});
