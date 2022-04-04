import { RequestHandler } from "express";
import {
  AddItemCategoryService,
  AddItemService,
  AddItemTypeService,
  AddOrganizationService
} from "../services/admin.service";

export const AddItemsController: RequestHandler = async (req, res, next) => {
  try {
    await AddItemService(req.body);
    res.json({ message: "food item added successfully" }).status(200);
  } catch (error) {
    next(error);
  }
};

export const AddItemCategoryController: RequestHandler = async (req, res, next) => {
  try {
    await AddItemCategoryService(req.body);
    res.json({ message: "food category added successfully", code: 200 }).status(200);
  } catch (error) {
    next(error);
  }
};

export const AddItemTypeController: RequestHandler = async (req, res, next) => {
  try {
    await AddItemTypeService(req.body);
    res.json({ message: "food type added successfully", code: 200 }).status(200);
  } catch (error) {
    next(error);
  }
};

export const AddOrganizationController: RequestHandler = async (req, res, next) => {
  try {
    await AddOrganizationService(req.body);
    res.json({ message: "organization added successfully", code: 200 }).status(200);
  } catch (error) {
    next(error);
  }
};

