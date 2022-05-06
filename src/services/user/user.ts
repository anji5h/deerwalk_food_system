import { userModel } from "../../dataSource";

export const GetUserService = async (id: number) => {
  return userModel.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      org: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};
