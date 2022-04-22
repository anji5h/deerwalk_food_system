import { RequestHandler } from "express";
import { AddFoodService, FetchFoodService } from "../../services/admin/food";
import { ValidateError } from "../../utils/errorHandler";

export const FetchFoodController: RequestHandler = async (req, res, next) => {
  try {
    const foods = await FetchFoodService(parseInt(req.params.food_type));
    res.json({ foods }).status(200);
  } catch (err: any) {
    next(err);
  }
};

export const AddFoodController: RequestHandler = async (req, res, next) => {
  try {
    await AddFoodService(req.body);
    res.json({ message: "food item added successfully" }).status(200);
  } catch (error: any) {
    next(new ValidateError(error));
  }
};
