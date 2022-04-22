import { config } from "dotenv";
config();

//function to check if environment variables are set
(() => {
  const required = [
    "PORT",
    "ORIGIN",
    "DATABASE_URL",
    "SP_ADMIN_NAME",
    "SP_ADMIN_PASSWORD",
    "SP_ADMIN_EMAIL",
    "REFRESH_TOKEN_SECRET",
    "ACCESS_TOKEN_SECRET",
    "REFRESH_TOKEN_EXPIRES_IN",
    "ACCESS_TOKEN_EXPIRES_IN",
  ];

  required.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`${key} is not set`);
    }
  });
})();

export const PORT = parseInt(process.env.PORT);
export const ORIGIN = process.env.ORIGIN || "*";

export const DATABASE_URL = process.env.DATABASE_URL;

export const REFRESH_TOKEN_SECRET = new Uint8Array(Buffer.from(process.env.REFRESH_TOKEN_SECRET));
export const ACCESS_TOKEN_SECRET = new Uint8Array(Buffer.from(process.env.ACCESS_TOKEN_SECRET));
export const REFRESH_TOKEN_EXPIRES_IN = parseInt(process.env.REFRESH_TOKEN_EXPIRES_IN);
export const ACCESS_TOKEN_EXPIRES_IN = parseInt(process.env.ACCESS_TOKEN_EXPIRES_IN);

export const ORDER_DATE = process.env.ORDER_DATE || "2022/04/01";

export const SP_ADMIN_NAME = process.env.SP_ADMIN_NAME;
export const SP_ADMIN_EMAIL = process.env.SP_ADMIN_EMAIL;
export const SP_ADMIN_PASSWORD = process.env.SP_ADMIN_PASSWORD;
