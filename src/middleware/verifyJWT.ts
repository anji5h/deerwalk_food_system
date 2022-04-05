import { RequestHandler } from "express";
import { UnauthorizedError } from "../utils/errorHandler";
import { verifyToken } from "../utils/jwt";

export const verifyJWT: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) throw new UnauthorizedError("user unauthorized");
    const payload = await verifyToken(token);
    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};
