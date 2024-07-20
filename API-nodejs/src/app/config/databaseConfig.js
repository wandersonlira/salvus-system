import mysql2 from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

export const CONEXAO = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
