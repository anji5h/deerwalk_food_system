import { foodModel, orderModel } from "../../dataSource";
import { BadRequestError } from "../../utils/errorHandler";
import { AddOrderValidator } from "../../validator/order.validator";

export const AddOrderService = async (body: ORDER_REQ.IOrderRequest, user_id: number) => {
  let data: ORDER_REQ.IOrderRequest = await AddOrderValidator.validateAsync(body, {
    abortEarly: false,
    stripUnknown: true,
  });

  let bulkCheckQuantity = data.orders.map((item) => ({
    id: item.food_id,
    quantity: {
      lt: item.quantity,
    },
  }));

  let checkQuantity = await foodModel.findMany({
    where: {
      OR: bulkCheckQuantity,
    },
    select: {
      name: true,
    },
  });

  if (!!checkQuantity.length) {
    let err = checkQuantity.map((item) => ({ path: item.name, message: "Out of stock" }));
    throw new BadRequestError("Out of stock", err);
  }

  let bulkOrder = data.orders.map((order) => ({
    user_id,
    food_id: order.food_id,
    quantity: order.quantity,
  }));

  let order = await orderModel.createMany({ data: bulkOrder });
  return order;
};
