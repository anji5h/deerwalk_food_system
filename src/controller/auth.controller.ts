import { NextFunction, Request, Response } from "express";
import { signupService } from "../services/auth.service";

export const LoginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    res.json({}).status(200);
  } catch (error) {
    next(error);
  }
};

export const SignupController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await signupService(req.body);
    res.json({message:"user created sucessfully"}).status(200);
  } catch (error) {
    next(error);
  }
};
