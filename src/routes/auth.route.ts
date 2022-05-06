import express from "express";
import { LoginController } from "../controller/auth/auth.controller";
const router = express.Router();

router.post("/login", LoginController);
export default router;
