import { NextFunction, Request, Response } from "express";

export const LoginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    res.json({}).status(200);
  } catch (error) {
    next(error);
  }
};

export const SignupController = async (req: Request, res: Response, next: NextFunction) => {
  try {
  
    res.json({}).status(200);
  } catch (error) {
    next(error);
  }
};
