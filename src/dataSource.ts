import { PrismaClient } from "@prisma/client";
import { hashPassword } from "./utils/hash";
export const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  if (params.model === "User" && params.action === "create") {
    const user = params.args.data;
    const hash = await hashPassword(user.password);
    user.password = hash;
    params.args.data = user;
  }
  return next(params);
});

//db model
export const userModel = prisma.user;
export const orgModel = prisma.organization;
export const foodModel = prisma.food;
export const foodCategoryModel = prisma.food_Category;
export const foodTypeModel = prisma.food_Type;
export const orderModel = prisma.order;
