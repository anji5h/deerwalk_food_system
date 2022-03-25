import express from "express";
import {
  AddItemCategoryController,
  AddItemsController,
  AddItemTypeController,
} from "../controller/admin.controller";
import upload from "./../utils/multer";
const router = express.Router();

router.post("/add-item", upload.single("image"), AddItemsController);
router.post("/add-item-category", AddItemCategoryController);
router.post("/add-item-type", AddItemTypeController);

export default router;
