import express from "express";
import { AddFoodController, FetchFoodController } from "../controller/admin/food";
import { AddItemCategoryController } from "../controller/admin/foodCategory";
import { AddItemTypeController } from "../controller/admin/foodType";
import { AddOrganizationController } from "../controller/admin/organization";
import { AddUserController } from "../controller/admin/user";
import { verifyCanteenAdmin } from "../middleware/verifyCanteenAdmin";
import { verifyRole } from "../middleware/verifyRole";
import { verifySuperAdmin } from "../middleware/verifySuperAdmin";

const router = express.Router();

//user route
// router.get("/user/get");
router.post("/user/create", verifyRole, AddUserController);
//food route
router.get("/food/fetch", verifyCanteenAdmin, FetchFoodController);
router.post("/food/create", verifyCanteenAdmin, AddFoodController);
//food category route
router.post("/food/category/create", verifyCanteenAdmin, AddItemCategoryController);
//food type route
router.post("/food/type/create", verifyCanteenAdmin, AddItemTypeController);
//add organization route
router.post("/organization/create", verifySuperAdmin, AddOrganizationController);

export default router;
