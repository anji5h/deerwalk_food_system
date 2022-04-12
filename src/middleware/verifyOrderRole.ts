import { RequestHandler } from "express";
import { ForbiddenError } from "../utils/errorHandler";

export const verifyOrderRole: RequestHandler = async (req, res, next) => {
  try {
    if (req.user.role === "ADMIN" || req.user.role === "USER") {
      return next();
    }
    throw new ForbiddenError("You are not allowed to perform this action");
  } catch (error) {
    next(error);
  }
};
