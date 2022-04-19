import Joi from "joi";

export const foodCategoryValidator: Joi.Schema<ADMIN_REQ.IAddFoodCategoryRequest> = Joi.object({
  name: Joi.string().trim().required().lowercase().messages({
    "string.empty": `"" cannot be empty`,
  }),
});
