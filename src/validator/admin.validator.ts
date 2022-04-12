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
  category_id: Joi.number().required().messages({
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
  start_time: Joi.number().required().messages({
    "any.required": `"food_start_time" is required`,
    "number.empty": `"food_start_time" cannot be empty`,
    "number.base": `"food_start_time" must be a number`,
  }),
  end_time: Joi.number().required().messages({
    "any.required": `"food_end_time" is required`,
    "number.empty": `"food_end_time" cannot be empty`,
    "number.base": `"food_end_time" must be a number`,
  }),
  quantity: Joi.number().required().messages({
    "any.required": `"initial_quantity" is required`,
    "number.empty": `"initial_quantity" cannot be empty`,
    "number.base": `"inital_quantity" must be a number`,
  }),
});

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
  org_id: Joi.number().required().messages({
    "any.required": `"org_id" is required`,
    "number.empty": `"org_id" cannot be empty"`,
    "number.base": `"org_id" must be a number`,
  }),
  role: Joi.string().valid("USER", "CT_ADMIN", "ADMIN").required().messages({
    "any.required": `"role" is required`,
    "string.empty": `"role" cannot be empty`,
    "string.base": `"role" must be either "user" or "admin" or "ct_admin"`,
  }),
});
