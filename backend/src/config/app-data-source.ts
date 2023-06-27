import 'reflect-metadata';

import { User } from '../entity/User.entity';
import { Role } from '../entity/Role.entity';
import { Department } from '../entity/Department.entity';
import { Visitor } from '../entity/Visitor.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT !== undefined ? parseInt(process.env.MYSQL_PORT) : undefined,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: true,
    logging: true,
    entities:[User, Role, Department, Visitor],
    subscribers: [],
    migrations: [],
});
