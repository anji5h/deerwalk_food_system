import express from "express";
import { GetUserController } from "../controller/user/user.controller";
const router = express.Router();

router.get("/me", GetUserController);
// router.post("/delete");

export default router;
