import { PrismaClient } from "@prisma/client";
import { hashPassword } from "./utils/hash";
export const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  let {
    model,
    args: { data },
    action,
  } = params;
  if (model === "User" && (action === "create" || action === "update")) {
    if (data.password) {
      const user = data;
      const hash = await hashPassword(user.password);
      user.password = hash;
      data = user;
    }
  }
  return next(params);
});
//db model
export const userModel = prisma.user;
export const orgModel = prisma.organization;
export const foodModel = prisma.food;
export const foodCategoryModel = prisma.food_Category;
export const foodTypeModel = prisma.food_Type;
export const foodFoodTypeModel = prisma.food_Food_Type;
export const orderModel = prisma.order;
