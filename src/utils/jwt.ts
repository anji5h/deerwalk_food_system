import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { JWT_SECRET } from "./../config/app.config";

export const signToken = async (payload: JWTPayload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(JWT_SECRET);
};

export const verifyToken = async (token: string) => {
  return jwtVerify(token, JWT_SECRET);
};
