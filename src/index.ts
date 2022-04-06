import cookieParser from "cookie-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import path from "path";
import { ORIGIN, PORT } from "./config/app.config";
import { AppDataSource } from "./data-source";
import apiRoute from "./routes";
import ErrorHandler from "./utils/errorHandler";

const app = express();
//cors
app.use(
  cors({
    origin: ORIGIN,
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
//cookie parser
app.use(cookieParser());
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//static route
app.use("/static/image", express.static(path.join(__dirname, "../public/uploads")));
//api route
app.use("/api", apiRoute);
//error handler
app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  res
    .status(err.statusCode || 500)
    .json({
      message: err.message || "Internal Server Error",
      code: err.statusCode || 500,
      err: err.err || null,
    });
});

//initialize data source
AppDataSource.initialize()
  .then(async ({}) => {
    //start server
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
