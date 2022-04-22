import express from "express";
import authRoute from "./auth.route";
import adminRoute from "./admin.route";
import orderRoute from "./order.route";
import { verifyAccessJWT } from "../middleware/verifyAccessToken";
import { verifyOrderRole } from "../middleware/verifyOrderRole";
const router = express.Router();

router.use("/auth", authRoute);
router.use("/admin", verifyAccessJWT, adminRoute);
router.use("/order", verifyAccessJWT, verifyOrderRole, orderRoute);

export default router;
