declare namespace ADMIN_REQ {
  interface IAddItemCategoryRequest {
    name: string;
  }
  interface IAddItemTypeRequest extends IAddItemCategoryRequest {}

  interface IAddOrganizationRequest extends IAddItemCategoryRequest {
    credit: number;
  }
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
}
