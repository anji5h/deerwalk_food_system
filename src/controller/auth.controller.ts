import { NextFunction, Request, Response } from "express";
import { loginValidator, signupValidator } from "../validator/auth.validator";

export const LoginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let data = await loginValidator.validateAsync(req.body, {
      stripUnknown: true,
    });
    res.json({ data }).status(200);
  } catch (error) {
    next(error);
  }
};

export const SignupController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let data = await signupValidator.validateAsync(req.body, {
      abortEarly: true,
      stripUnknown: true,
    });
    
    res.json({ data }).status(200);
  } catch (error) {
    next(error);
  }
};
