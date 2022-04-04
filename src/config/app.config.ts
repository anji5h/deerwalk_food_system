import { config } from "dotenv";
config();
export const PORT = process.env.PORT || 4000;
export const ORIGIN = process.env.ORIGIN || "*";
export const JWT_SECRET = new Uint8Array(Buffer.from(process.env.JWT_SECRET || "secret"));
