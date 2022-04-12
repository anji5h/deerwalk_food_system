import { foodTypeModel } from "../../dataSource";
import { BadRequestError } from "../../utils/errorHandler";
import { itemTypeValidator } from "../../validator/admin.validator";

export const AddItemTypeService = async (body: ADMIN_REQ.IAddItemTypeRequest) => {
  let data = await itemTypeValidator.validateAsync(body, { stripUnknown: true, abortEarly: false });
  let row = await foodTypeModel.findUnique({
    where: {
      name: data.name,
    },
    select: {
      name: true,
    },
  });
  if (row?.name) throw new BadRequestError("food type already exists");
  await foodTypeModel.create({ data });
};
