import { orderModel, prisma } from "../../dataSource";
import { BadRequestError } from "../../utils/errorHandler";
import { setTime } from "../../utils/formatTime";
import { AddOrderValidator } from "../../validator/order.validator";

export const AddOrderService = async (body: ORDER_REQ.IOrderRequest, user_id: number) => {
  let data: ORDER_REQ.IOrderRequest = await AddOrderValidator.validateAsync(body, {
    abortEarly: false,
    stripUnknown: true,
  });

  let orderTime = new Date();
  let orderDate = setTime(orderTime.getHours(), orderTime.getMinutes());
  
  //check order status of all ordered items
  let checkOrderStatus = await data.orders.reduce<Promise<ORDER_REQ.IOrderStatus[]>>(
    async (acc, order) => {
      let foodArray = await acc;
      let food = await prisma.$queryRaw<ORDER_REQ.IOrderStatus[]>`SELECT fd.id,fd.name,fd.rate,
      if(fd.quantity>=${order.quantity} AND fd.start_time <= ${orderDate} AND fd.end_time >= ${orderDate},1,0)
      as order_status
      FROM dfs.food as fd where fd.id=${order.food_id};`;
      if (food.length)
        foodArray.push({
          ...food[0],
          quantity: order.quantity,
        });
      return foodArray;
    },
    Promise.resolve([])
  );

  if (!checkOrderStatus.length) {
    throw new BadRequestError("No food available for this order");
  }
  //map the food items to order model
  let bulkOrder = checkOrderStatus.reduce<ORDER_REQ.IOrderModel[]>((acc, food) => {
    if (food.order_status) {
      acc.push({
        user_id,
        rate: food.rate,
        food_id: food.id,
        quantity: food.quantity,
        created_at: orderTime,
      });
    }
    return acc;
  }, []);

  if (!bulkOrder.length) {
    throw new BadRequestError("order failed", checkOrderStatus);
  }
  // await orderModel.createMany({ data: bulkOrder });
  return checkOrderStatus;
};

export const FetchOrderService = async (user_id: number) => {
  let data =
    await prisma.$queryRaw`select o.id,o.quantity,o.rate,(o.quantity*o.rate) as amount,f.name,f.start_time,f.end_time
    from dfs.order as o
    inner join dfs.user as u on u.id = o.user_id
    inner join dfs.food as f on f.id = o.food_id
    where u.id = ${user_id} and DATE(o.created_at) = curdate()
    group by o.id`;
  return data;
};
