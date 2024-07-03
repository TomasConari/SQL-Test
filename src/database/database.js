import { createPool } from 'mysql2/promise';
import dotenv from "dotenv";

dotenv.config();

const pool = createPool({
    host: process.env.HOST,
    port: 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE
});

export const connection = pool;