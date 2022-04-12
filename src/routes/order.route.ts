import express from "express";
import { AddOrderController } from "../controller/order/order";
const router = express.Router();

router.post("/create", AddOrderController);
router.post("/delete");
// router.post("/fetch");

export default router;
