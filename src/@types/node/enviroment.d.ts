declare namespace NodeJS {
  interface EnvType {
    NODE_ENV: string;
    PORT: string;
    ORIGIN: string;
    DATABASE_URL: string;
    TOKEN_SECRET: string;
    TOKEN_EXPIRY: string;
    SP_ADMIN_NAME: string;
    SP_ADMIN_PASSWORD: string;
    SP_ADMIN_EMAIL: string;
    ORDER_DATE: string;
  }

  interface ProcessEnv extends EnvType {}
}
