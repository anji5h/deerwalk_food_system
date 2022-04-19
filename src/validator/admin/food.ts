import Joi from "joi";

export const foodValidator: Joi.Schema<ADMIN_REQ.IAddFoodRequest> = Joi.object({
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
  start_hour: Joi.number().min(1).max(24).required().messages({
    "any.required": `"food_start_hour" is required`,
    "number.empty": `"food_start_hour" cannot be empty`,
    "number.base": `"food_start_hour" must be a number`,
    "number.min": `"food_start_hour" must be between 1 and 24`,
    "number.max": `"food_start_hour" must be between 1 and 24`,
  }),
  start_min: Joi.number().min(0).max(60).default(0).messages({
    "number.empty": `"food_start_min" cannot be empty`,
    "number.base": `"food_start_min" must be a number`,
    "number.min": `"food_start_min" must be between 0 and 60`,
    "number.max": `"food_start_min" must be between 0 and 60`,
  }),
  end_hour: Joi.number().min(1).max(24).required().messages({
    "any.required": `"food_end_hour" is required`,
    "number.empty": `"food_end_hour" cannot be empty`,
    "number.base": `"food_end_hour" must be a number`,
    "number.min": `"food_end_hour" must be between 0 and 24`,
    "number.max": `"food_end_hour" must be between 0 and 24`,
  }),
  end_min: Joi.number().min(0).max(60).default(0).messages({
    "number.empty": `"food_end_min" cannot be empty`,
    "number.base": `"food_end_min" must be a number`,
    "number.min": `"food_end_min" must be between 1 and 60`,
    "number.max": `"food_end_min" must be between 1 and 60`,
  }),
  quantity: Joi.number().required().messages({
    "any.required": `"initial_quantity" is required`,
    "number.empty": `"initial_quantity" cannot be empty`,
    "number.base": `"inital_quantity" must be a number`,
  }),
});

