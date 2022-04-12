import { foodCategoryModel } from "../../dataSource";
import { BadRequestError } from "../../utils/errorHandler";
import { itemCategoryValidator } from "../../validator/admin.validator";

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
