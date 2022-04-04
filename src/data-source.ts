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
  entities: [__dirname + "/entity/*.{ts,js}"],
  migrations: [__dirname + "/migration/*.{ts,js}"],
  migrationsTableName: "dfs_migration",
  subscribers: [],
});

export const SelectQuery = AppDataSource.createQueryBuilder().select();
export const InsertQuery = AppDataSource.createQueryBuilder().insert();
export const UpdateQuery = AppDataSource.createQueryBuilder().update();
export const DeleteQuery = AppDataSource.createQueryBuilder().delete();


