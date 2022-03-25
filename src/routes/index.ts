import express from "express";
import authRoute from "./auth.route";
import adminRoute from './admin.route'
const router = express.Router();

router.use("/auth", authRoute);
router.use("/admin",adminRoute)

export default router;
