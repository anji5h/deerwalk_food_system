import { RequestHandler } from "express";
import { AddUserService } from "../../services/admin/user";
import { ValidateError } from "../../utils/errorHandler";

export const AddUserController: RequestHandler = async (req, res, next) => {
  try {
    await AddUserService(req.body);
    res.json({ message: "user created sucessfully" }).status(200);
  } catch (error) {
    return next(new ValidateError(error));
  }
};
