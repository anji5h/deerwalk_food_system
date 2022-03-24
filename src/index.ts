import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import { PORT, ORIGIN } from "./config/app.config";
import apiRoute from "./routes";
import ErrorHandler from "./utils/errorHandler";

const app = express();
AppDataSource.initialize()
  .then(async () => {
    app.use(
      cors({
        origin: ORIGIN,
        allowedHeaders: ["Content-Type", "Authorization", "Accept"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      })
    );
    //body parser
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    //api route
    app.use("/api", apiRoute);
    app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
      res
        .status(err.statusCode || 500)
        .json({ message: err.message || "Internal Server Error", code: err.statusCode || 500 });
    });
    //start server
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
