declare namespace ORDER_REQ {
  interface IOrder {
    food_id: number;
    quantity: number;
  }
  interface IOrderRequest {
    orders: IOrder[];
  }
  interface IOrderModel extends IOrder {
    user_id: number;
    rate: number;
    created_at?: Date;
  }
  interface IOrderStatus {
    id: number;
    rate: number;
    name: string;
    quantity: number;
    order_status: boolean;
  }
}
