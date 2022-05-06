import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { TOKEN_SECRET, TOKEN_EXPIRY } from "./../config/app.config";
import { setJWTExpiryTime } from "./formatTime";

export const signToken = async (payload: JWTPayload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(setJWTExpiryTime(TOKEN_EXPIRY))
    .sign(TOKEN_SECRET);
};
export const verifyToken = async (token: string) => {
  return jwtVerify(token, TOKEN_SECRET);
};
