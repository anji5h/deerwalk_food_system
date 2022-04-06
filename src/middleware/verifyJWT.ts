import { RequestHandler } from "express";
import { UnauthorizedError } from "../utils/errorHandler";
import { verifyToken } from "../utils/jwt";

export const verifyJWT: RequestHandler = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) throw new UnauthorizedError("user unauthorized");
    const { payload } = await verifyToken(token);
    req.user = payload;
    res.json({payload}).status(200)
    // next();
  } catch (error: any) {
    next(new UnauthorizedError(error.message));
  }
};
