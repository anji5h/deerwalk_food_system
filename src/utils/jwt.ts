import { JWTPayload, SignJWT, jwtVerify } from "jose";
import {
  REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRES_IN,
  ACCESS_TOKEN_EXPIRES_IN,
} from "./../config/app.config";
import { setJWTExpiryTime } from "./formatTime";

export const signToken = async (payload: JWTPayload, expireIn: number, secret: Uint8Array) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(setJWTExpiryTime(expireIn))
    .sign(secret);
};
export const verifyToken = async (token: string, secret: Uint8Array) => {
  return jwtVerify(token, secret);
};

export const verifyAccessToken = (token: string) => {
  return verifyToken(token, ACCESS_TOKEN_SECRET);
};
export const verifyRefreshToken = (token: string) => {
  return verifyToken(token, REFRESH_TOKEN_SECRET);
};
export const signAccessToken = async (payload: JWTPayload) => {
  const accessToken = await signToken(payload, ACCESS_TOKEN_EXPIRES_IN, ACCESS_TOKEN_SECRET);
  return {
    accessToken,
    expires_in: ACCESS_TOKEN_EXPIRES_IN,
  };
};
export const signRefreshToken = (payload: JWTPayload) => {
  return signToken(payload, REFRESH_TOKEN_EXPIRES_IN, REFRESH_TOKEN_SECRET);
};

export const createAuthToken = async (payload: JWTPayload) => {
  const [refreshToken, { accessToken, expires_in }] = await Promise.all([
    signRefreshToken(payload),
    signAccessToken(payload),
  ]);
  return { refreshToken, accessToken, expires_in };
};
