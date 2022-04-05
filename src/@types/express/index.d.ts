import { JWTVerifyResult } from "jose";

declare module "express-serve-static-core" {
  interface Request {
    user?: JWTVerifyResult;
  }
}