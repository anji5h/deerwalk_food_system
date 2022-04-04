import { InsertQuery, SelectQuery } from "../data-source";
import { Item } from "../entity/Item";
import { ItemCategory } from "../entity/ItemCategory";
import { ItemType } from "../entity/ItemType";
import { Organization } from "../entity/Organization";
import { BadRequestError } from "../utils/errorHandler";
import {
  itemCategoryValidator,
  itemTypeValidator,
  itemValidator,
  orgValidator,
} from "../validator/admin.validator";

export const AddItemService = async (body: any) => {
  let data = await itemValidator.validateAsync(body, { stripUnknown: true });
  let row = await SelectQuery("item")
    .from(Item, "item")
    .where("item.name = :name", { name: data.name })
    .getOne();
  if (row?.name) throw new BadRequestError("food item already exists");
  console.log(data);
  // await QueryBuilder.insert().into(Item).values(data).execute();
};

export const AddItemCategoryService = async (body: IAddItemCategoryRequest) => {
  let data = await itemCategoryValidator.validateAsync(body, {
    stripUnknown: true,
  });
  let row = await SelectQuery("item_category")
    .from(ItemCategory, "category")
    .where("category.name = :name", { name: data.name })
    .getOne();
  if (row?.name) throw new BadRequestError("food category already exists");
  await InsertQuery.into(ItemCategory)
    .values({ ...data })
    .execute();
};

export const AddItemTypeService = async (body: IAddItemTypeRequest) => {
  let data = await itemTypeValidator.validateAsync(body, { stripUnknown: true });
  let row = await SelectQuery("item_type")
    .from(ItemType, "type")
    .where("type.name = :name", { name: data.name })
    .getOne();
  if (row?.name) throw new BadRequestError("food type already exists");
  await InsertQuery.into(ItemType)
    .values({ ...data })
    .execute();
};

export const AddOrganizationService = async (body: IAddOrganizationRequest) => {
  let data = await orgValidator.validateAsync(body, { stripUnknown: true });
  let row = await SelectQuery("organization")
    .from(Organization, "org")
    .where("org.name = :name", { name: data.name })
    .getOne();
  if (row?.name) throw new BadRequestError("organization already exists");
  await InsertQuery.into(Organization)
    .values({ ...data })
    .execute();
};