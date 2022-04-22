import { foodCategoryModel, foodModel, prisma } from "../../dataSource";
import { BadRequestError } from "../../utils/errorHandler";
import { setTime } from "../../utils/formatTime";
import { foodValidator } from "../../validator/admin/food";

export const FetchFoodService = async (params?: number) => {
  let data = await foodCategoryModel.findMany({
    select: {
      id: true,
      name: true,
      foods: {
        where: {
          is_menu: true,
          food_food_type: {
            some: {
              food_type: {
                id: params || undefined,
              },
            },
          },
        },
      },
    },
  });
  return data;
};

export const AddFoodService = async (body: ADMIN_REQ.IAddFoodRequest) => {
  let { type, start_hour, start_min, end_hour, end_min, ...data }: ADMIN_REQ.IAddFoodRequest =
    await foodValidator.validateAsync(body, {
      stripUnknown: true,
      abortEarly: false,
    });
  let itemRow = await foodModel.findUnique({
    where: {
      name: data.name,
    },
  });
  if (itemRow) throw new BadRequestError("food item already exists");

  await foodModel.create({
    data: {
      ...data,
      start_time: setTime(start_hour, start_min),
      end_time: setTime(end_hour, end_min),
      food_food_type: {
        create: type.map((typeId) => ({
          food_type: {
            connect: { id: typeId },
          },
        })),
      },
    },
  });
};
