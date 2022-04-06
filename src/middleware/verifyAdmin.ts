import { RequestHandler } from "express";
import { UnauthorizedError } from "../utils/errorHandler";

export const verifyAdmin: RequestHandler = async (req, res, next) => {
  try {
    const { role } = req.user;
    if (role !== "admin") throw new UnauthorizedError("access denied");
    next();
  } catch (error: any) {
    next(new UnauthorizedError(error.message));
  }
};
