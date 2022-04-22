declare namespace NodeJS {
  interface EnvType {
    NODE_ENV: string;
    PORT: string;
    ORIGIN: string;
    DATABASE_URL: string;
    REFRESH_TOKEN_SECRET: string;
    ACCESS_TOKEN_SECRET: string;
    REFRESH_TOKEN_EXPIRES_IN: string;
    ACCESS_TOKEN_EXPIRES_IN: string;
    SP_ADMIN_NAME: string;
    SP_ADMIN_PASSWORD: string;
    SP_ADMIN_EMAIL: string;
    ORDER_DATE: string;
  }

  interface ProcessEnv extends EnvType {}
}
