import { RequestHandler } from "express";
import { AddItemCategoryService } from "../../services/admin/foodCategory";
import { ValidateError } from "../../utils/errorHandler";

export const AddItemCategoryController: RequestHandler = async (req, res, next) => {
  try {
    await AddItemCategoryService(req.body);
    res.json({ message: "food category added successfully", code: 200 }).status(200);
  } catch (err:any) {
    next(new ValidateError(err));
  }
};
