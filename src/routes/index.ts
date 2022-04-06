import express from "express";
import authRoute from "./auth.route";
import adminRoute from "./admin.route";
import { verifyJWT } from "../middleware/verifyJWT";
import { verifyAdmin } from "../middleware/verifyAdmin";
const router = express.Router();

router.use("/auth", authRoute);
router.use("/admin", verifyJWT, verifyAdmin, adminRoute);

export default router;
