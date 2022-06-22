import { config as dotenv } from "dotenv";
dotenv();

export const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
}