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

export const AddItemService = async (body: ADMIN_REQ.IAddItemRequest) => {
  let data = await itemValidator.validateAsync(body, { stripUnknown: true, abortEarly: false });
  let row = await SelectQuery("item")
    .from(Item, "item")
    .where("item.name = :name", { name: data.name })
    .getOne();
  if (row?.name) throw new BadRequestError("food item already exists");
  console.log(data);
  await InsertQuery.into(Item).values(data).execute();
};

export const AddItemCategoryService = async (body: ADMIN_REQ.IAddItemCategoryRequest) => {
  let data = await itemCategoryValidator.validateAsync(body, {
    stripUnknown: true,
    abortEarly: false,
  });
  let row = await SelectQuery("category")
    .from(ItemCategory, "category")
    .where("category.name = :name", { name: data.name })
    .getOne();
  if (row?.name) throw new BadRequestError("food category already exists");
  await InsertQuery.into(ItemCategory)
    .values({ ...data })
    .execute();
};

export const AddItemTypeService = async (body: ADMIN_REQ.IAddItemTypeRequest) => {
  let data = await itemTypeValidator.validateAsync(body, { stripUnknown: true, abortEarly: false });
  let row = await SelectQuery("type")
    .from(ItemType, "type")
    .where("type.name = :name", { name: data.name })
    .getOne();
  if (row?.name) throw new BadRequestError("food type already exists");
  await InsertQuery.into(ItemType)
    .values({ ...data })
    .execute();
};

export const AddOrganizationService = async (body: ADMIN_REQ.IAddOrganizationRequest) => {
  let data = await orgValidator.validateAsync(body, { stripUnknown: true, abortEarly: false });
  let row = await SelectQuery("org")
    .from(Organization, "org")
    .where("org.name = :name", { name: data.name })
    .getOne();
  if (row?.name) throw new BadRequestError("organization already exists");
  await InsertQuery.into(Organization)
    .values({ ...data })
    .execute();
};
