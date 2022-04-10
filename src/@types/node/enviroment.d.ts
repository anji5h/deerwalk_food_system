declare namespace NodeJS {
  interface EnvType<T> {
    readonly NODE_ENV: T;
    readonly PORT: T;
    readonly ORIGIN: T;
    readonly DATABASE_URL: T;
    readonly JWT_SECRET: T;
    readonly JWT_EXPIRES_IN: T;
    readonly SP_ADMIN_NAME: T;
    readonly SP_ADMIN_PASSWORD: T;
    readonly SP_ADMIN_EMAIL: T;
  }

  interface ProcessEnv extends EnvType<string> {}
}
