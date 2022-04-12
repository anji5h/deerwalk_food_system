import { RequestHandler } from "express";
import { ForbiddenError } from "../utils/errorHandler";

export const verifyAdmin: RequestHandler = async (req, res, next) => {
  try {
    const { role } = req.user;
    if (role === "ADMIN") {
      return next();
    }
    throw new ForbiddenError("You are not allowed to perform this action");
  } catch (error) {
    next(error);
  }
};
