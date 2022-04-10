import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { JWT_SECRET } from "./../config/app.config";

export const signToken = async (payload: JWTPayload, expire: string | number = "1d") => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expire)
    .sign(JWT_SECRET);
};

export const verifyToken = async (token: string) => {
  return jwtVerify(token, JWT_SECRET);
};
