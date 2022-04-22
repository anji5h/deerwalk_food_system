import { RequestHandler } from "express";
import { AddItemTypeService } from "../../services/admin/foodType";
import { ValidateError } from "../../utils/errorHandler";

export const AddItemTypeController: RequestHandler = async (req, res, next) => {
  try {
    await AddItemTypeService(req.body);
    res.json({ message: "food type added successfully", code: 200 }).status(200);
  } catch (err:any) {
    next(new ValidateError(err));
  }
};
