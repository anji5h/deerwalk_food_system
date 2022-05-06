import { RequestHandler } from "express";
import { UnauthorizedError } from "../utils/errorHandler";
import { verifyToken } from "../utils/jwt";

export const verifyJWT: RequestHandler = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) throw new UnauthorizedError("missing token");
    const { payload } = await verifyToken(token);
    req.user = payload as any;
    next();
  } catch (err: any) {
    next(new UnauthorizedError("user unauthorized"));
  }
};
