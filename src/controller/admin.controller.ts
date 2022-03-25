import { NextFunction, Request, Response } from "express";
import {
  AddItemCategoryService,
  AddItemService,
  AddItemTypeService,
} from "../service/admin.service";
import { BadRequestError } from "../utils/errorHandler";

export const AddItemsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.fileErr) throw new BadRequestError(req.fileErr);
    await AddItemService(req.body, req.file);
    res.json({ message: "food item added successfully" }).status(200);
  } catch (error) {
    next(error);
  }
};

export const AddItemCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await AddItemCategoryService(req.body);
    res.json({ message: "food category added successfully", code: 200 }).status(200);
  } catch (error) {
    next(error);
  }
};

export const AddItemTypeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await AddItemTypeService(req.body);
    res.json({ message: "food type added successfully", code: 200 }).status(200);
  } catch (error) {
    next(error);
  }
};
