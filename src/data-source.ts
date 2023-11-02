import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/user';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'Admin',
  password: 'AdminPassword',
  database: 'dbTaq',
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});
