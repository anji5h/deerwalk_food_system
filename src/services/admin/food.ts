import { foodCategoryModel, foodModel, prisma } from "../../dataSource";
import { BadRequestError } from "../../utils/errorHandler";
import { setTime } from "../../utils/formatTime";
import { itemValidator } from "../../validator/admin.validator";

export const FetchFoodService = async () => {
  let data = await foodCategoryModel.findMany({
    select: {
      id: true,
      name: true,
      foods: {
        where: {
          is_menu: true,
        },
        include: {
          food_food_type: {
            select: {
              food_type: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });
  // let data =
  //   await prisma.$queryRaw`select fc.id as cty_id, fc.name as cty_name, fd.*, ft.id as type_id, ft.name as type_name from dfs.food_category as fc
  //   inner join dfs.food as fd on fd.category_id=fc.id
  //   inner join dfs.food_food_type as fft on fft.food_id = fd.id
  //   inner join dfs.food_type as ft on ft.id = fft.type_id
  //   group by fc.id`;
  return data;
};

export const AddFoodService = async (body: ADMIN_REQ.IAddItemRequest) => {
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
    data: {
      ...data,
      start_time: setTime(data.start_time),
      end_time: setTime(data.end_time),
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
