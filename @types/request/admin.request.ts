interface IAddItemCategoryRequest {
  name: string;
}
interface IAddItemTypeRequest extends IAddItemCategoryRequest {}
interface IAddItemRequest extends IAddItemCategoryRequest {
  category: number;
  type: number;
  description?: string;
  image: string;
  s_time: Date;
  e_time: Date;
  rate: number;
  ini_qty: number;
}
