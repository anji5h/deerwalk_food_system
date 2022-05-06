import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import path from "path";
import { ORIGIN, PORT } from "./config/app.config";
import { prisma } from "./dataSource";
import apiRoute from "./routes";
import ErrorHandler from "./utils/errorHandler";

const app = express();
//cors
app.use(
  cors({
    origin: ORIGIN,
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//static route
app.use("/static/image", express.static(path.join(__dirname, "../public/uploads")));
//api route
app.use("/api", apiRoute);
//error handler
app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    status: err.statusCode || 500,
    err: err.err || null,
  });
});

prisma
  .$connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
      console.log(`Database connected`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
