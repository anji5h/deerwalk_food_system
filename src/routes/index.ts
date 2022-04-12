import express from "express";
import authRoute from "./auth.route";
import adminRoute from "./admin.route";
import orderRoute from "./order.route";
import { verifyJWT } from "../middleware/verifyJWT";
import { verifyOrderRole } from "../middleware/verifyOrderRole";
const router = express.Router();

router.use("/auth", authRoute);
router.use("/admin", verifyJWT, adminRoute);
router.use("/order", verifyJWT, verifyOrderRole, orderRoute);

export default router;
