import "reflect-metadata";
import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASS, DB_USER } from "./config/db.config";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  migrationsTableName: "dfs_migration",
  subscribers: [],
});

export const QueryBuilder = AppDataSource.createQueryBuilder();
