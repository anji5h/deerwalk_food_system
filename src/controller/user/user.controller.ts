import { RequestHandler } from "express";
import { GetUserService } from "../../services/user/user";
import { BadRequestError } from "../../utils/errorHandler";

export const GetUserController: RequestHandler = async (req, res, next) => {
  try {
    let user = await GetUserService(req.user.id);
    res.status(201).json({ message: "success", user });
  } catch (error: any) {
    next(new BadRequestError(error.message));
  }
};
