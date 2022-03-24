import express from "express";
import authRoute from "./auth.route";

const router = express.Router();

router.use("/auth", authRoute);
// router.use("/user");
// router.use("/expense");

export default router;
