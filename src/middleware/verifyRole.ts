import { RequestHandler } from "express";
import { ForbiddenError } from "../utils/errorHandler";

export const verifyRole: RequestHandler = async (req, res, next) => {
  try {
    const { role, org_id } = req.user;
    const { role: reqRole } = req.body;

    if (role === "ADMIN" && reqRole === "USER") {
      req.body.org_id = org_id;
      return next();
    }
    if (role === "SP_ADMIN" && (reqRole === "ADMIN" || reqRole === "CT_ADMIN")) {
      return next();
    }
    throw new ForbiddenError("You are not allowed to perform this action");
  } catch (error) {
    next(error);
  }
};
