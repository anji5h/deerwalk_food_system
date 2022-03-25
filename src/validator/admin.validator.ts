import Joi from "joi";

export interface IAddItemCategoryRequest {
  name: string;
}
export interface IAddItemTypeRequest extends IAddItemCategoryRequest {}
export interface IAddItemRequest extends IAddItemCategoryRequest {
  category: number;
  type: number;
  description: string;
  image: string;
  s_time: Date;
  e_time: Date;
  rate: number;
  i_qty: number;
  a_qty: number;
}
export const itemCategoryValidator: Joi.Schema<IAddItemCategoryRequest> = Joi.object({
  name: Joi.string().trim().required().lowercase().messages({
    "string.empty": "Name cannot be empty",
  }),
});

export const itemTypeValidator: Joi.Schema<IAddItemTypeRequest> = itemCategoryValidator;

export const itemValidator: Joi.Schema<IAddItemRequest> = Joi.object({
  name: Joi.string().trim().required().lowercase().messages({
    "string.empty": "food name cannot be empty",
  }),
  category: Joi.number().required().messages({
    "number.empty": "food category cannot be empty",
    "number.base": "food category must be a number",
  }),
  type: Joi.array().items(Joi.number()).required().messages({
    "array.empty": "food type cannot be empty",
    "array.base": "food type must be an array",
    "number.base": "food type must be an array of numbers",
  }),
  rate: Joi.number().required().messages({
    "number.empty": "food rate cannot be empty",
    "number.base": "food rate must be a number",
  }),
  description: Joi.string().trim().lowercase(),
  s_time: Joi.number().required().messages({
    "number.empty": "Start time cannot be empty",
    "number.base": "start time must be a number",
  }),
  e_time: Joi.number().required().messages({
    "number.empty": "end time cannot be empty",
    "number.base": "end time must be a number",
  }),
  ini_qty: Joi.number().required().messages({
    "number.empty": "initial quantity cannot be empty",
    "number.base": "initial quantity must be a number",
  }),
});
