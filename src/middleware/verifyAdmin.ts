import { RequestHandler } from "express";
import { ForbiddenError } from "../utils/errorHandler";

export const verifyAdmin: RequestHandler = async (req, res, next) => {
  try {
    if (req.user.role === "ADMIN") {
      return next();
    }
    throw new ForbiddenError("You are not allowed to perform this action");
  } catch (error) {
    next(error);
  }
};
