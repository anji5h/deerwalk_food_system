import { RequestHandler } from "express";
import { loginService } from "../../services/auth/auth.service";
import { ValidateError } from "../../utils/errorHandler";

export const LoginController: RequestHandler = async (req, res, next) => {
  try {
    let data = await loginService(req.body);
    res.json({ message: "Login Successful", ...data }).status(200);
  } catch (error: any) {
    next(new ValidateError(error));
  }
};
