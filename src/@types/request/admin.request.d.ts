declare namespace ADMIN_REQ {
  interface IAddFoodCategoryRequest {
    name: string;
  }
  interface IAddItemTypeRequest extends IAddFoodCategoryRequest {}

  interface IAddOrganizationRequest extends IAddFoodCategoryRequest {
    credit: number;
  }
  interface IAddFoodRequest extends IAddFoodCategoryRequest {
    category_id: number;
    type: number[];
    description?: string;
    image: string;
    start_hour: number;
    start_min: number;
    end_hour: number;
    end_min: number;
    rate: number;
    quantity: number;
  }
  interface IAddUserRequest extends IAddFoodCategoryRequest {
    email: string;
    password: string;
    org_id: number;
    role: USER_ENTITIY.ROLE;
  }
}
