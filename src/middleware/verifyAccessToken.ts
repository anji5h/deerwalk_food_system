import { RequestHandler } from "express";
import { UnauthorizedError } from "../utils/errorHandler";
import { verifyAccessToken } from "../utils/jwt";

export const verifyAccessJWT: RequestHandler = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) throw new UnauthorizedError("missing token");
    const { payload } = await verifyAccessToken(token);
    req.user = payload as any;
    next();
  } catch (err:any) {
    next(new UnauthorizedError("user unauthorized"));
  }
};
