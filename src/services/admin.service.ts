import { foodCategoryModel, foodModel, foodTypeModel, orgModel, userModel } from "../dataSource";
import { BadRequestError } from "../utils/errorHandler";
import { hashPassword } from "../utils/hash";
import {
  itemCategoryValidator,
  itemTypeValidator,
  itemValidator,
  orgValidator,
  userValidator,
} from "../validator/admin.validator";

export const AddUserService = async (body: ADMIN_REQ.IAddUserRequest) => {
  let data: ADMIN_REQ.IAddUserRequest = await userValidator.validateAsync(body, {
    stripUnknown: true,
    abortEarly: false,
  });
  const user = await userModel.findUnique({
    where: {
      email: data.email,
    },
    select: { email: true },
  });
  if (user) throw new BadRequestError("user already exists");
  await userModel.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
      org_id: data.org_id,
    },
  });
};

export const AddItemService = async (body: ADMIN_REQ.IAddItemRequest) => {
  let { type, ...data }: ADMIN_REQ.IAddItemRequest = await itemValidator.validateAsync(body, {
    stripUnknown: true,
    abortEarly: false,
  });
  let itemRow = await foodModel.findFirst({
    where: {
      name: data.name,
    },
  });
  if (itemRow) throw new BadRequestError("food item already exists");
  await foodModel.create({
    data: { ...data, start_time: `${data.start_time}:00:00`, end_time: `${data.end_time}:00:00` },
  });
};

export const AddItemCategoryService = async (body: ADMIN_REQ.IAddItemCategoryRequest) => {
  let data = await itemCategoryValidator.validateAsync(body, {
    stripUnknown: true,
    abortEarly: false,
  });
  let row = await foodCategoryModel.findUnique({
    where: {
      name: data.name,
    },
    select: {
      name: true,
    },
  });
  if (row?.name) throw new BadRequestError("food category already exists");
  await foodCategoryModel.create({ data });
};

export const AddItemTypeService = async (body: ADMIN_REQ.IAddItemTypeRequest) => {
  let data = await itemTypeValidator.validateAsync(body, { stripUnknown: true, abortEarly: false });
  let row = await foodTypeModel.findUnique({ where: { name: data.name }, select: { name: true } });
  if (row?.name) throw new BadRequestError("food type already exists");
  await foodTypeModel.create({ data });
};

export const AddOrganizationService = async (body: ADMIN_REQ.IAddOrganizationRequest) => {
  let data = await orgValidator.validateAsync(body, { stripUnknown: true, abortEarly: false });
  let row = await orgModel.findUnique({ where: { name: data.name }, select: { name: true } });
  if (row?.name) throw new BadRequestError("organization already exists");
  await orgModel.create({ data });
};
