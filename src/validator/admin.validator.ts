import Joi from "joi";

export const itemCategoryValidator: Joi.Schema<ADMIN_REQ.IAddItemCategoryRequest> = Joi.object({
  name: Joi.string().trim().required().lowercase().messages({
    "string.empty": `"" cannot be empty`,
  }),
});

export const itemTypeValidator: Joi.Schema<ADMIN_REQ.IAddItemTypeRequest> = itemCategoryValidator;

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

export const itemValidator: Joi.Schema<ADMIN_REQ.IAddItemRequest> = Joi.object({
  name: Joi.string().trim().required().lowercase().messages({
    "any.required": `"food_name" is required`,
    "string.empty": `"food_name" cannot be empty`,
  }),
  category: Joi.number().required().messages({
    "any.required": `"food_category" is required`,
    "number.empty": `"food_category" cannot be empty`,
    "number.base": `"food_category" must be a number`,
  }),
  type: Joi.array().items(Joi.number()).required().messages({
    "any.required": `"food_type" is required`,
    "array.empty": `"food_type" cannot be empty`,
    "array.base": `"food_type" must be an array`,
    "number.base": `"food_type" must be an array of numbers`,
  }),
  rate: Joi.number().required().messages({
    "any.required": `"food_rate" is required`,
    "number.empty": `"food_rate" cannot be empty`,
    "number.base": `"food_rate" must be a number`,
  }),
  description: Joi.string().trim().lowercase(),
  s_time: Joi.number().required().messages({
    "any.required": `"food_start_time" is required`,
    "number.empty": `"food_start_time" cannot be empty`,
    "number.base": `"food_start_time" must be a number`,
  }),
  e_time: Joi.number().required().messages({
    "any.required": `"food_end_time" is required`,
    "number.empty": `"food_end_time" cannot be empty`,
    "number.base": `"food_end_time" must be a number`,
  }),
  ini_qty: Joi.number().required().messages({
    "any.required": `"initial_quantity" is required`,
    "number.empty": `"initial_quantity" cannot be empty`,
    "number.base": `"inital_quantity" must be a number`,
  }),
});
