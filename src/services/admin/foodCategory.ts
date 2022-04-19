import { foodCategoryModel } from "../../dataSource";
import { BadRequestError } from "../../utils/errorHandler";
import { foodCategoryValidator } from "../../validator/admin/foodCategory";

export const AddItemCategoryService = async (body: ADMIN_REQ.IAddFoodCategoryRequest) => {
  let data = await foodCategoryValidator.validateAsync(body, {
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
