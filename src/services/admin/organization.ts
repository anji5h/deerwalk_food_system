import { orgModel } from "../../dataSource";
import { BadRequestError } from "../../utils/errorHandler";
import { orgValidator } from "../../validator/admin/organization";

export const AddOrganizationService = async (body: ADMIN_REQ.IAddOrganizationRequest) => {
  let data = await orgValidator.validateAsync(body, { stripUnknown: true, abortEarly: false });
  let row = await orgModel.findUnique({
    where: {
      name: data.name,
    },
    select: {
      name: true,
    },
  });
  if (row?.name) throw new BadRequestError("organization already exists");
  await orgModel.create({ data });
};
