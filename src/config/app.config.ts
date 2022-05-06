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
    "TOKEN_SECRET",
    "TOKEN_EXPIRY",
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

export const TOKEN_SECRET = new Uint8Array(Buffer.from(process.env.TOKEN_SECRET));
export const TOKEN_EXPIRY = parseInt(process.env.TOKEN_EXPIRY);

export const ORDER_DATE = process.env.ORDER_DATE || "2022/04/01";

export const SP_ADMIN_NAME = process.env.SP_ADMIN_NAME;
export const SP_ADMIN_EMAIL = process.env.SP_ADMIN_EMAIL;
export const SP_ADMIN_PASSWORD = process.env.SP_ADMIN_PASSWORD;
