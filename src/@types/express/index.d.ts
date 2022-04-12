import { JWTPayload } from "jose";

declare module "express-serve-static-core" {
  interface IPayload extends JWTPayload {
    id: number;
    role: USER_ENTITIY.ROLE;
    org_id: number;
  }
  interface Request {
    user: IPayload;
  }
}
