import Joi from "joi";

export const AddOrderValidator = Joi.object<ORDER_REQ.IOrderRequest>({
  orders: Joi.array()
    .required()
    .items(
      Joi.object({
        food_id: Joi.number().required().messages({
          "any.required": `"food_id" is required`,
          "number.empty": `"food_id" cannot be empty`,
          "number.base": `"food_id" must be a number`,
        }),
        quantity: Joi.number().required().messages({
          "any.required": `"quantity" is required`,
          "number.empty": `"quantity" cannot be empty`,
          "number.base": `"quantity" must be a number`,
        }),
      })
    )
    .messages({
      "any.required": `"orders" is required`,
      "array.empty": `"orders" cannot be empty`,
      "array.base": `"orders" must be an array`,
    }),
});

export const DeleteOrderValidator = Joi.object<ORDER_REQ.IOrderRequest>({
  orders: Joi.array().required().items(Joi.number().required()).messages({
    "any.required": `"orders_id" is required`,
    "array.empty": `"orders_id" cannot be empty`,
    "array.base": `"orders_id" must be an array`,
    "number.base": `"orders_id" must be an array of numbers`,
  }),
});
