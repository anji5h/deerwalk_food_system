declare namespace ORDER_REQ {
  interface IOrder {
    food_id: number;
    quantity: number;
  }

  interface IOrderRequest {
    orders: IOrder[];
  }
}
