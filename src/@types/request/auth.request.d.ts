declare namespace AUTH_REQ {
  interface ILoginRequest {
    email: string;
    password: string;
  }
  interface ISignupRequest {
    name: string;
    email: string;
    password: string;
    org_id: number;
    role: USER_ENTITY.ROLE;
  }
}
