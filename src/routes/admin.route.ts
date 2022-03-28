import express from "express";
import {
  AddItemCategoryController,
  AddItemsController,
  AddItemTypeController,
} from "../controller/admin.controller";

const router = express.Router();

router.post("/add-item", AddItemsController);
router.post("/add-item-category", AddItemCategoryController);
router.post("/add-item-type", AddItemTypeController);

export default router;
