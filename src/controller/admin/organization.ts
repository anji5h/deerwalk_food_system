import { RequestHandler } from "express";
import { AddOrganizationService } from "../../services/admin/organization";
import { ValidateError } from "../../utils/errorHandler";

export const AddOrganizationController: RequestHandler = async (req, res, next) => {
  try {
    await AddOrganizationService(req.body);
    res.json({ message: "organization added successfully", code: 200 }).status(200);
  } catch (err:any) {
    next(new ValidateError(err));
  }
};
