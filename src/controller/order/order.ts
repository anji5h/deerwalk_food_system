import { RequestHandler } from "express";
import { AddOrderService } from "../../services/order/order";
import { ValidateError } from "../../utils/errorHandler";

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
