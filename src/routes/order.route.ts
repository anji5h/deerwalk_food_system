import express from "express";
import { AddOrderController, FetchOrderController } from "../controller/order/order";
const router = express.Router();

router.post("/create", AddOrderController);
router.get("/fetch", FetchOrderController);
// router.post("/delete");

export default router;
