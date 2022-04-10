import express from "express";
import {
  AddItemCategoryController,
  AddItemsController,
  AddItemTypeController,
  AddOrganizationController,
  AddUserController,
} from "../controller/admin.controller";
import { verifyCanteenAdmin } from "../middleware/verifyCanteenAdmin";
import { verifyRole } from "../middleware/verifyRole";
import { verifySuperAdmin } from "../middleware/verifySuperAdmin";

const router = express.Router();

//add user route
router.post("/user/create", verifyRole, AddUserController);

//add food info route
router.post("/item/create", verifyCanteenAdmin, AddItemsController);
router.post("/item/category/create", verifyCanteenAdmin, AddItemCategoryController);
router.post("/item/type/create", verifyCanteenAdmin, AddItemTypeController);

//add organization route
router.post("/organization/create", verifySuperAdmin, AddOrganizationController);

export default router;
