declare namespace NodeJS {
  interface EnvType<T> {
    NODE_ENV: T;
    PORT: T;
    ORIGIN: T;
    DATABASE_URL: T;
    JWT_SECRET: T;
    JWT_EXPIRES_IN: T;
    SP_ADMIN_NAME: T;
    SP_ADMIN_PASSWORD: T;
    SP_ADMIN_EMAIL: T;
  }

  interface ProcessEnv extends EnvType<string> {}
}
