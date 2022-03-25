import { AppDataSource } from "../data-source";
import { Item } from "./../entity/Item";
import { ItemCategory } from "../entity/ItemCategory";
import { ItemType } from "../entity/ItemType";
import { BadRequestError } from "../utils/errorHandler";
import {
  itemCategoryValidator,
  itemTypeValidator,
  itemValidator,
} from "../validator/admin.validator";

export const AddItemService = async (body: any, file: Express.Multer.File) => {
  let data = await itemValidator.validateAsync(body);
  data.image = file?.filename || "default.png";
  let { name } = await AppDataSource.createQueryBuilder()
    .select()
    .from(Item, "item")
    .where("item.name = :name", { name: data.name })
    .getOne();
  if (name) throw new BadRequestError("Item already exists");
  console.log(data);
  //   await AppDataSource.createQueryBuilder().insert().into(Item).values(data).execute();
};

export const AddItemCategoryService = async (body: any) => {
  let data = await itemCategoryValidator.validateAsync(body);
  let { name } = await AppDataSource.createQueryBuilder()
    .select()
    .from(ItemCategory, "category")
    .where("category.name = :name", { name: data.name })
    .getOne();
  if (name) throw new BadRequestError("food category already exists");
  await AppDataSource.createQueryBuilder()
    .insert()
    .into(ItemCategory)
    .values({ name: data.name })
    .execute();
};

export const AddItemTypeService = async (body: any) => {
  let data = await itemTypeValidator.validateAsync(body);
  let { name } = await AppDataSource.createQueryBuilder()
    .select()
    .from(ItemType, "type")
    .where("type.name = :name", { name: data.name })
    .getOne();
  if (name) throw new BadRequestError("food type already exists");
  await AppDataSource.createQueryBuilder()
    .insert()
    .into(ItemType)
    .values({ name: data.name })
    .execute();
};
