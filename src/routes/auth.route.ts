import express from "express";
import { LoginController, RefreshTokenController } from "../controller/auth/auth.controller";
import { verifyRefreshJWT } from "../middleware/verifyRefreshToken";
const router = express.Router();

router.post("/login", LoginController);
router.get("/refresh/token", verifyRefreshJWT, RefreshTokenController);
export default router;
