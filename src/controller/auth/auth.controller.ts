import { RequestHandler } from "express";
import { loginService } from "../../services/auth/auth.service";
import { ValidateError } from "../../utils/errorHandler";
import { signAccessToken } from "../../utils/jwt";

export const LoginController: RequestHandler = async (req, res, next) => {
  try {
    let data = await loginService(req.body);
    res.json({ message: "Login Successful", ...data }).status(200);
  } catch (error: any) {
    next(new ValidateError(error));
  }
};

export const RefreshTokenController: RequestHandler = async (req, res, next) => {
  try {
    let { accessToken, expires_in } = await signAccessToken({
      id: req.user.id,
      role: req.user.role,
      org_id: req.user.org_id,
    });
    res.json({ token_type: "Bearer", access_token: accessToken, expires_in }).status(200);
  } catch (error: any) {
    next(error);
  }
};
