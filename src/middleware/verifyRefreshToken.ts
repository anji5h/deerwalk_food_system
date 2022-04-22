import { RequestHandler } from "express";
import { UnauthorizedError } from "../utils/errorHandler";
import { verifyRefreshToken } from "../utils/jwt";

export const verifyRefreshJWT: RequestHandler = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) throw new UnauthorizedError("missing token");
    const { payload } = await verifyRefreshToken(token);
    req.user = payload as any;
    next();
  } catch (error) {
    next(new UnauthorizedError("user unauthorized"));
  }
};
