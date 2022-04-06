import { RequestHandler } from "express";
import { loginService, signupService } from "../services/auth.service";
import { ValidateError } from "../utils/errorHandler";

export const LoginController: RequestHandler = async (req, res, next) => {
  try {
    let data = await loginService(req.body);
    res.json({ message: "Login Successful", token: data }).status(200);
  } catch (error) {
    next(new ValidateError(error));
  }
};

export const SignupController: RequestHandler = async (req, res, next) => {
  try {
    await signupService(req.body);
    res.json({ message: "user created sucessfully" }).status(200);
  } catch (error) {
    return next(new ValidateError(error));
  }
};
