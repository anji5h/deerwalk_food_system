import { NextFunction, Request, Response } from "express";
import { loginService, signupService } from "../services/auth.service";

export const LoginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let data = await loginService(req.body);
    res
      .cookie("token", data, {
        httpOnly: true,
        expires: new Date(Date.now() + 86400000),
      })
      .json({ message: "Login Successful" })
      .status(200);
  } catch (error) {
    next(error);
  }
};

export const SignupController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await signupService(req.body);
    res.json({ message: "user created sucessfully" }).status(200);
  } catch (error) {
    next(error);
  }
};
