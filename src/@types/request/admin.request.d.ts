declare namespace ADMIN_REQ {
  interface IAddItemCategoryRequest {
    name: string;
  }
  interface IAddItemTypeRequest extends IAddItemCategoryRequest {}

  interface IAddOrganizationRequest extends IAddItemCategoryRequest {
    credit: number;
  }
  interface IAddItemRequest extends IAddItemCategoryRequest {
    category_id: number;
    type: number[];
    description?: string;
    image: string;
    start_time: number;
    end_time: number;
    rate: number;
    quantity: number;
  }
  interface IAddUserRequest extends IAddItemCategoryRequest {
    email: string;
    password: string;
    org_id: number;
    role: USER_ENTITIY.ROLE;
  }
}
