import { RequestHandler } from "express";
import { AddOrderService, FetchOrderService } from "../../services/order/order";
import { ValidateError } from "../../utils/errorHandler";

export const FetchOrderController: RequestHandler = async (req, res, next) => {
  try {
    const orders = await FetchOrderService(req.user.id);
    res.status(200).json({
      status: "success",
      orders,
    });
  } catch (error) {
    next(error);
  }
};

export const AddOrderController: RequestHandler = async (req, res, next) => {
  try {
    let order = await AddOrderService(req.body, req.user.id);
    res.json({ message: "order Successful", order }).status(200);
  } catch (error: any) {
    next(new ValidateError(error));
  }
};

export const DeleteOrderController: RequestHandler = async (req, res, next) => {
  try {
    await AddOrderService(req.body, req.user.id);
    res.json({ message: "order Successful" }).status(200);
  } catch (error: any) {
    next(error);
  }
};
