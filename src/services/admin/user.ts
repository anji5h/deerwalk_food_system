import { userModel } from "../../dataSource";
import { BadRequestError } from "../../utils/errorHandler";
import { userValidator } from "../../validator/admin/user";

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
