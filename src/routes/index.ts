import express from "express";
import authRoute from "./auth.route";
import adminRoute from "./admin.route";
import orderRoute from "./order.route";
import userRoute from "./user.route";
import { verifyOrderRole } from "../middleware/verifyOrderRole";
import { verifyJWT } from "../middleware/verifyToken";
const router = express.Router();

router.use("/auth", authRoute);
router.use("/admin", verifyJWT, adminRoute);
router.use("/user", verifyJWT, userRoute);
router.use("/order", verifyJWT, verifyOrderRole, orderRoute);

export default router;
